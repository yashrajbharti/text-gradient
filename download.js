(function (exports) {
  function urlsToAbsolute(nodeList) {
    if (!nodeList.length) {
      return [];
    }
    let attrName = "href";
    if (
      nodeList[0].__proto__ === HTMLImageElement.prototype ||
      nodeList[0].__proto__ === HTMLScriptElement.prototype
    ) {
      attrName = "src";
    }
    nodeList = [].map.call(nodeList, function (el, i) {
      let attr = el.getAttribute(attrName);
      if (!attr) {
        return;
      }
      let absURL = /^(https?|data):/i.test(attr);
      if (absURL) {
        return el;
      } else {
        return el;
      }
    });
    return nodeList;
  }

  function screenshotPage() {
    let wrapper = document.getElementById("gradient");
    html2canvas(wrapper, {
      onrendered: function (canvas) {
        canvas.toBlobHD(function (blob) {
          saveAs(blob, "myScreenshot.png");
        });
      },
    });
  }

  function addOnPageLoad_() {
    window.addEventListener("DOMContentLoaded", function (e) {
      let scrollX = document.documentElement.dataset.scrollX || 0;
      let scrollY = document.documentElement.dataset.scrollY || 0;
      window.scrollTo(scrollX, scrollY);
    });
  }

  function generate() {
    screenshotPage();
  }
  exports.screenshotPage = screenshotPage;
  exports.generate = generate;
})(window);
