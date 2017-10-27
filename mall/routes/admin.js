var express = require('express');
var router = express.Router();

//文件传输
var multer = require('multer');
var upload = multer();
//图片处理
var images = require("images");

//uuid
var uuidv1 = require("uuid/v1");

// 数据结构
var models = require("../models/models");

var Category = models.Category;

router.post("/setCategory/", function(req, res) {
	var arr = req.body.categories;
	if(!arr.length) {
		res.json({
			status: false,
			msg: "储存失败，没有分类信息！"
		});
		return;
	}
	Category.remove({}, function() {
		for(var i = 0; i < arr.length; i++) {
			var category = new Category(arr[i]);
			category.save(function(err) {
				if(err) {
					console.log(err);
					return;
				}
			});
		}
		res.json({
			status: true,
			msg: "储存成功！"
		});
	});

});

router.get("/getCategory/", function(req, res) {
	Category.find(req.query)
		.select("id pId name")
		.exec(function(err, doc) {
			if(err) {
				console.log(err);
				return;
			};
			if(!doc.length) {
				res.json({
					status: false,
					msg: "查询商品分类失败！"
				})
				return;
			};
			res.json({
				status: true,
				msg: "获取分类成功！",
				data: doc
			})
		})
});

//同步删除后台数据
router.post("/delCategory/", function(req, res) {
	console.log(req.body)
	Category.remove({
		$or: [{
			id: req.body.id
		}, {
			pId: req.body.id
		}]
	}, function(err) {
		if(err) {
			console.log(err);
			return;
		}
		res.json({
			status: true,
			msg: "删除成功！"
		});
	});
});

//获取一级分类
router.get("/getCategory/first/", function(req, res) {
	Category.find({
		level: 0
	}, function(err, docs) {
		if(err) {
			console.log(err);
			return;
		};
		if(!docs.length) {
			res.json({
				status: false,
				msg: "暂无一级分类！"
			})
			return;
		};
		res.json({
			status: true,
			msg: "获取一级分类成功！",
			data: docs
		})
	})
});

//根据传参，获取二级分类、三级分类
router.get("/getCategory/sub/", function(req, res) {
	Category.find(req.query, function(err, docs) {
		if(err) {
			console.log(err);
			return;
		};
		if(!docs.length) {
			res.json({
				status: false,
				msg: "暂无分类！"
			})
			return;
		};
		res.json({
			status: true,
			msg: "获取分类成功！",
			data: docs
		})
	})
});

//图片接口
router.post("/upload/img/", upload.single('file'), function(req, res) {
	console.log(req.file);
	//判断是否为一张图片
	var Exg = /^image\/\w+$/;
	var flag = Exg.test(req.file.mimetype)
	console.log(flag)
	//	req.file.match(/^image\/w+$/)

	if(!flag) {
		res.json({
			status: false,
			msg: "格式错误，请选择一张图片"
		})
		return;
	}

	//判断图片的体积是否小于2M
	if(req.file.size >= 2 * 1024 * 1024) {
		res.json({
			status: false,
			msg: "图片体积太大，请压缩图片"
		})
		return;
	}

	//判断图片的尺寸
	var width = images(req.file.buffer).width();
	if(width < 300 || width > 1500) {
		res.json({
			status: false,
			msg: "图片尺寸不符合，请重新处理"
		})
		return;
	}

	//处理图片文件名
	var originalName = req.file.originalname;
	var formate = originalName.split('.');

	//扩展名
	var extName = '.' + formate[formate.length - 1];
	var filename = uuidv1();

	//储存文件夹的位置
	var fileFolder = "/images/goods/";

	images(req.file.buffer)
		.resize(720) //缩放尺寸至720宽
		.save("public" + fileFolder + filename + extName, {
			quality: 70 //保存图片到文件,图片质量为70
		});

	images(req.file.buffer)
		.resize(360) //缩放尺寸至720宽
		.save("public" + fileFolder + filename + "_md" + extName, {
			quality: 70 //保存图片到文件,图片质量为70
		});

	//返回储存结果
	res.json({
		status: true,
		msg: "图片上传处理成功",
		lgImg: fileFolder + filename + extName,
		mdImg: fileFolder + filename + "_md" + extName
	})
});

//轮播图上传API
router.post("/upload/slideimg/", upload.single('file'), function(req, res) {
	console.log(req.file)
	//判断是否为一张图片
	var Exg = /^image\/\w+$/;
	var flag = Exg.test(req.file.mimetype)
	console.log(flag)
	//	req.file.match(/^image\/w+$/)

	if(!flag) {
		res.json({
			status: false,
			msg: "格式错误，请选择一张图片"
		})
		return;
	}

	//判断图片的体积是否小于2M
	if(req.file.size >= 2 * 1024 * 1024) {
		res.json({
			status: false,
			msg: "图片体积太大，请压缩图片"
		})
		return;
	}

	//判断图片的尺寸
	var width = images(req.file.buffer).width();
	var height = images(req.file.buffer).height();
	if(width != height) {
		res.json({
			status: false,
			msg: "图片尺寸750*750，请重新上传！"
		})
		return;
	}
	if(width < 300 || width > 1500) {
		res.json({
			status: false,
			msg: "图片尺寸不符合，请重新上传！"
		})
		return;
	}

	//处理图片文件名
	var originalName = req.file.originalname;
	var formate = originalName.split('.');

	//扩展名
	var extName = '.' + formate[formate.length - 1];
	var filename = uuidv1();

	//储存文件夹的位置
	var fileFolder = "/images/goods/";

	images(req.file.buffer)
		.resize(720) //缩放尺寸至720宽
		.save("public" + fileFolder + filename + "_Ig" + extName, {
			quality: 70 //保存图片到文件,图片质量为70
		});

	//返回储存结果
	res.json({
		status: true,
		msg: "图片上传处理成功!",
		slideImg: fileFolder + filename + "_Ig" + extName
	})
});

//通用图片上传
router.post("/upload/common/", upload.single('file'), function(req, res) {
	console.log(req.file)
	//判断是否为一张图片
	var Exg = /^image\/\w+$/;
	var flag = Exg.test(req.file.mimetype)
	console.log(flag)
	//	req.file.match(/^image\/w+$/)

	if(!flag) {
		res.json({
			errno: 1,
			msg: "格式错误，请选择一张图片"
		})
		return;
	}

	//判断图片的体积是否小于2M
	if(req.file.size >= 2 * 1024 * 1024) {
		res.json({
			errno: 1,
			msg: "图片体积太大，请压缩图片"
		})
		return;
	}

	//处理图片文件名
	var originalName = req.file.originalname;
	var formate = originalName.split('.');

	//扩展名
	var extName = '.' + formate[formate.length - 1];
	var filename = uuidv1();

	//储存文件夹的位置
	var fileFolder = "/images/details/";

	images(req.file.buffer)
		.resize(720) //缩放尺寸至720宽
		.save("public" + fileFolder + filename + extName, {
			quality: 70 //保存图片到文件,图片质量为70
		});

	//返回储存结果
	res.json({
		errno: 0,
		msg: "图片上传处理成功！",
		data: [fileFolder + filename + extName]
	})
});

module.exports = router;