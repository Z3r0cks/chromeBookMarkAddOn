var Bookmarker;
(function (Bookmarker) {
    var Categorie = /** @class */ (function () {
        function Categorie() {
            this.catWrapper = document.createElement("div");
            this.title = document.createElement("input");
            this.innerWapper = document.createElement("div");
            this.svg = document.createElement("img");
            this.svg.src = './svg/plus-circle-solid.svg';
            this.svg.className = "innerSvg";
            this.title.className = "title";
            this.title.placeholder = "type title";
            this.catWrapper.className = "catWrapper";
            this.innerWapper.className = "innerWrapper";
        }
        Categorie.prototype.addNewCategory = function () {
            var _this = this;
            document.getElementById("wrapper").appendChild(this.catWrapper);
            this.catWrapper.appendChild(this.title);
            this.catWrapper.appendChild(this.innerWapper);
            this.innerWapper.appendChild(this.svg);
            this.changeIntoPlaceholder(this.title);
            this.svg.addEventListener("click", function () {
                _this.addNewUrl();
            });
        };
        Categorie.prototype.changeIntoPlaceholder = function (title) {
            title.addEventListener("keypress", function (e) {
                if (e.key == "Enter") {
                    title.placeholder = title.value;
                    title.value = "";
                }
            });
        };
        Categorie.prototype.addNewUrl = function () {
            var newWrapper = document.createElement("div");
            var url = document.createElement("input");
            var title = document.createElement("input");
            var btn = document.createElement("btn");
            btn.className = "urlBtn";
            btn.innerHTML = "accept";
            url.className = "url";
            url.placeholder = "https://www...";
            title.className = "urlTitle";
            title.placeholder = "URL title";
            newWrapper.className = "urlWrapper";
            this.innerWapper.appendChild(newWrapper);
            console.log(this.svg);
            this.innerWapper.appendChild(this.svg);
            this.innerWapper.nextElementSibling;
            newWrapper.appendChild(title);
            newWrapper.appendChild(url);
            newWrapper.appendChild(btn);
            this.addUrlBtnEvenetlistner(btn, url, newWrapper, title);
        };
        Categorie.prototype.addUrlBtnEvenetlistner = function (btn, url, wrapper, title) {
            btn.addEventListener("click", function () {
                var newUrl = document.createElement("a");
                newUrl.innerHTML = title.value;
                newUrl.href = url.value;
                newUrl.className = "newUrl";
                newUrl.target = "_blank";
                newUrl.rel = "noopener";
                if (newUrl.href && newUrl.innerHTML) {
                    url.remove();
                    title.remove();
                    btn.remove();
                    wrapper.appendChild(newUrl);
                }
            });
        };
        return Categorie;
    }());
    Bookmarker.Categorie = Categorie;
})(Bookmarker || (Bookmarker = {}));
/// <reference path="./Category.ts" />
var Bookmarker;
/// <reference path="./Category.ts" />
(function (Bookmarker) {
    var wrapper = document.getElementById("wrapper");
    var svg = document.createElement("img");
    svg.src = './svg/plus-circle-solid.svg';
    svg.className = "svg";
    wrapper.appendChild(svg);
    svg.addEventListener('click', function () {
        var test = new Bookmarker.Categorie();
        test.addNewCategory();
    });
})(Bookmarker || (Bookmarker = {}));
//# sourceMappingURL=main.js.map