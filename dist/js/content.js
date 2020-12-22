var BookmarkExtension;
(function (BookmarkExtension) {
    var Category = /** @class */ (function () {
        function Category() {
            this.catWrapper = document.createElement("div");
            this.titleWrapper = document.createElement("div");
            this.title = document.createElement("input");
            this.innerWrapper = document.createElement("div");
            this.title.className = "title";
            this.title.placeholder = "type title";
            this.catWrapper.className = "catWrapper";
            this.innerWrapper.className = "innerWrapper";
            this.titleWrapper.className = "titleWrapper";
            this.innerSVG = new BookmarkExtension.SVG("innerSvg", "#213044").svg;
        }
        Category.prototype.addNewCategory = function () {
            var _this = this;
            document.getElementById("wrapper").appendChild(this.catWrapper);
            this.catWrapper.appendChild(this.titleWrapper);
            this.titleWrapper.appendChild(this.title);
            this.catWrapper.appendChild(this.innerWrapper);
            this.innerWrapper.appendChild(this.innerSVG);
            this.changeIntoPlaceholder(this.title);
            this.innerSVG.addEventListener("click", function () {
                _this.addNewUrl();
            });
        };
        Category.prototype.changeIntoPlaceholder = function (title) {
            title.addEventListener("keypress", function (e) {
                if (e.key == "Enter") {
                    title.placeholder = title.value;
                    title.value = "";
                }
            });
        };
        Category.prototype.addNewUrl = function () {
            var newURL = new BookmarkExtension.URL();
            this.innerWrapper.appendChild(newURL.wrapper);
            this.innerWrapper.appendChild(this.innerSVG);
            this.innerWrapper.nextElementSibling;
            newURL.addUrlBtnEvenetlistner();
        };
        return Category;
    }());
    BookmarkExtension.Category = Category;
})(BookmarkExtension || (BookmarkExtension = {}));
var BookmarkExtension;
(function (BookmarkExtension) {
    var URL = /** @class */ (function () {
        function URL() {
            var _this = this;
            this.wrapper = document.createElement("div");
            this.url = document.createElement("input");
            this.title = document.createElement("input");
            this.btn = document.createElement("button");
            this.deleteBtn = document.createElement("button");
            this.btn.className = "urlBtn";
            this.btn.innerHTML = "accept";
            this.deleteBtn.className = "deleteBtn";
            this.deleteBtn.innerHTML = "delete";
            this.url.className = "url";
            this.url.placeholder = "https://www...";
            this.title.className = "urlTitle";
            this.title.placeholder = "URL title";
            this.wrapper.className = "urlWrapper";
            this.deleteBtn.addEventListener("click", function () {
                _this.wrapper.remove();
            });
            this.wrapper.appendChild(this.title);
            this.wrapper.appendChild(this.url);
            this.wrapper.appendChild(this.btn);
            this.wrapper.appendChild(this.deleteBtn);
        }
        URL.prototype.addUrlBtnEvenetlistner = function () {
            var _this = this;
            this.btn.addEventListener("click", function () {
                var newUrl = document.createElement("a");
                newUrl.innerHTML = _this.title.value;
                newUrl.href = _this.url.value;
                newUrl.className = "newUrl";
                newUrl.target = "_blank";
                newUrl.rel = "noopener";
                if (newUrl.href && newUrl.innerHTML) {
                    _this.deleteBtn.remove();
                    _this.url.remove();
                    _this.title.remove();
                    _this.btn.remove();
                    _this.wrapper.appendChild(newUrl);
                    _this.wrapper.appendChild(_this.deleteBtn);
                }
            });
        };
        return URL;
    }());
    BookmarkExtension.URL = URL;
})(BookmarkExtension || (BookmarkExtension = {}));
var BookmarkExtension;
(function (BookmarkExtension) {
    var SVG = /** @class */ (function () {
        function SVG(className, fill) {
            this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            this.svg.setAttribute("class", className);
            this.svg.setAttribute("viewBox", "0 0 512 512");
            this.path = document.createElementNS('http://www.w3.org/2000/svg', "path");
            this.path.setAttribute("fill", fill);
            this.path.setAttributeNS(null, "d", "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z");
            this.svg.appendChild(this.path);
        }
        return SVG;
    }());
    BookmarkExtension.SVG = SVG;
})(BookmarkExtension || (BookmarkExtension = {}));
/// <reference path="./Category.ts" />
/// <reference path="./svg.ts" />
var BookmarkExtension;
/// <reference path="./Category.ts" />
/// <reference path="./svg.ts" />
(function (BookmarkExtension) {
    var svg = new BookmarkExtension.SVG("svg", "#74dfd9").svg;
    var wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    document.body.appendChild(wrapper);
    wrapper.appendChild(svg);
    svg.addEventListener('click', function () {
        var test = new BookmarkExtension.Category();
        test.addNewCategory();
    });
})(BookmarkExtension || (BookmarkExtension = {}));
