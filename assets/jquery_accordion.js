!function(e){function n(n){opened=e(document).find("."+n.cssOpen),e.each(opened,function(){e(this).addClass(n.cssClose).removeClass(n.cssOpen),n.animateClose(e(this),n)})}function o(e,o){return e.hasClass(o.cssOpen)?(n(o),i(o)&&s("",o),!1):(n(o),function(e,o){n(o),e.removeClass(o.cssClose).addClass(o.cssOpen),o.animateOpen(e,o),i(o)&&(id=e.attr("id"),s(id,o))}(e,o),!1)}function i(n){return!(!e.cookie||""==n.cookieName)}function s(n,o){if(!i(o))return!1;e.cookie(o.cookieName,n,o.cookieOptions)}function c(n){return!!i(n)&&null!=e.cookie(n.cookieName)}e.fn.accordion=function(n){if(!this||this.length<1)return this;!function(n,t){var d=e.extend({},e.fn.accordion.defaults,t),a="";n.each(function(){var n=e(this);!function(e,n){e.data("accordion-opts",n)}(n,d),"mouseenter"==d.bind&&n.bind("mouseenter",function(e){e.preventDefault(),o(n,d)}),"mouseover"==d.bind&&n.bind("mouseover",function(e){e.preventDefault(),o(n,d)}),"click"==d.bind&&n.bind("click",function(e){e.preventDefault(),o(n,d)}),"dblclick"==d.bind&&n.bind("dblclick",function(e){e.preventDefault(),o(n,d)}),id=n.attr("id"),i(d)&&c(d)?!1===function(n,o){return!!i(o)&&(!!c(o)&&(cookie=unescape(e.cookie(o.cookieName)),cookie==n))}(id,d)?(n.addClass(d.cssClose),d.loadClose(n,d)):(n.addClass(d.cssOpen),d.loadOpen(n,d),a=id):id!=d.defaultOpen?(n.addClass(d.cssClose),d.loadClose(n,d)):(n.addClass(d.cssOpen),d.loadOpen(n,d),a=id)}),a.length>0&&i(d)?s(a,d):s("",d)}(this,n)},e.fn.accordion.defaults={cssClose:"accordion-close",cssOpen:"accordion-open",cookieName:"accordion",cookieOptions:{path:"/",expires:7,domain:"",secure:""},defaultOpen:"",speed:"slow",bind:"click",animateOpen:function(e,n){e.next().stop(!0,!0).slideDown(n.speed)},animateClose:function(e,n){e.next().stop(!0,!0).slideUp(n.speed)},loadOpen:function(e,n){e.next().show()},loadClose:function(e,n){e.next().hide()}}}(jQuery); 