describe('Test probe-image-size', function () {

    var probe = require('probe-image-size');
    var fs = require('fs');

    var getSize = function (filePath) {
        return new Promise(function (resolve, reject) {
            var input = fs.createReadStream(filePath);
            probe(input, function (err, result) {
                if (err) return reject(err);
                return resolve(result);
            });
        })
    };

    it('should test a corrupted jpeg', function () {
        return getSize('images/corrupted-1.jpg');
    });

    it('should test a corrupted jpeg', function () {
        return getSize('images/corrupted-2.jpeg');
    });

    it('should test a jpeg jfif', function () {
        return getSize('images/jfif.jpg');
    });

    it('should test a jpeg exif', function () {
        return getSize('images/jpeg-exif.jpg');
    });

    it('should test an animated gif', function () {
        return getSize('images/image.gif');
    });

    it('should test a png', function () {
        return getSize('images/image.png');
    });

    it('should test a bmp', function () {
        return getSize('images/image.bmp');
    });

    it('should test a svg', function () {
        return getSize('images/image.svg');
    });

    it('should test a webp', function () {
        return getSize('images/image.webp');
    });

    it('should test a webp', function () {
        return getSize('images/image2.webp');
    });

    it('should test a webp saved as jpeg', function () {
        return getSize('images/jpeg-webp.jpg');
    });

    it('should test a webp saved as jpeg', function () {
        return getSize('images/jpeg-webp2.jpg');
    });

    it('should test a tiff', function () {
        return getSize('images/image.tiff');
    });
});

describe('Test image-size', function () {

    var getSize = require('image-size');

    it('should test a corrupted jpeg', function () {
        return getSize('images/corrupted-1.jpg');
    });

    it('should test a corrupted jpeg', function () {
        return getSize('images/corrupted-2.jpeg');
    });

    it('should test a jpeg jfif', function () {
        return getSize('images/jfif.jpg');
    });

    it('should test a jpeg exif', function () {
        return getSize('images/jpeg-exif.jpg');
    });

    it('should test an animated gif', function () {
        return getSize('images/image.gif');
    });

    it('should test a png', function () {
        return getSize('images/image.png');
    });

    it('should test a bmp', function () {
        return getSize('images/image.bmp');
    });

    it('should test a svg', function () {
        return getSize('images/image.svg');
    });

    it('should test a webp', function () {
        return getSize('images/image.webp');
    });

    it('should test a webp', function () {
        return getSize('images/image2.webp');
    });

    it('should test a webp saved as jpeg', function () {
        return getSize('images/jpeg-webp.jpg');
    });

    it('should test a webp saved as jpeg', function () {
        return getSize('images/jpeg-webp2.jpg');
    });

    it('should test a tiff', function () {
        return getSize('images/image.tiff');
    });
});

describe('Test sharp', function () {

    var sharp = require('sharp');
    console.dir(sharp.format);
    var getSize = function (filePath) {
        var image = sharp(filePath);
        return image.metadata();
    };

    it('should test a corrupted jpeg', function () {
        return getSize('images/corrupted-1.jpg');
    });

    it('should test a corrupted jpeg', function () {
        return getSize('images/corrupted-2.jpeg');
    });

    it('should test a jpeg jfif', function () {
        return getSize('images/jfif.jpg');
    });

    it('should test a jpeg exif', function () {
        return getSize('images/jpeg-exif.jpg');
    });

    it('should test an animated gif', function () {
        return getSize('images/image.gif');
    });

    it('should test a png', function () {
        return getSize('images/image.png');
    });

    it('should test a bmp', function () {
        return getSize('images/image.bmp');
    });

    it('should test a svg', function () {
        return getSize('images/image.svg');
    });

    it('should test a webp', function () {
        return getSize('images/image.webp');
    });

    it('should test a webp', function () {
        return getSize('images/image2.webp');
    });

    it('should test a webp saved as jpeg', function () {
        return getSize('images/jpeg-webp.jpg');
    });

    it('should test a webp saved as jpeg', function () {
        return getSize('images/jpeg-webp2.jpg');
    });

    it('should test a tiff', function () {
        return getSize('images/image.tiff');
    });

});