!function e(n,i,r){function a(o,l){if(!i[o]){if(!n[o]){var u="function"==typeof require&&require;if(!l&&u)return u(o,!0);if(t)return t(o,!0);throw new Error("Cannot find module '"+o+"'")}var s=i[o]={exports:{}};n[o][0].call(s.exports,function(e){var i=n[o][1][e];return a(i?i:e)},s,s.exports,e,n,i,r)}return i[o].exports}for(var t="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e){var n=e("./lib/easyformfileupload.js"),i=function(){{var e=$(".js_fileupload"),i="/",r={maxFileSize:6145728};new n(e,i,r)}};$(document).ready(i)},{"./lib/easyformfileupload.js":2}],2:[function(e,n){var i=function(e){return Array.prototype.slice.call(e,0)},r=function(){return!!(window.File&&window.FileList&&window.FileReader)},a=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},t=function(e,n,t){var o=e.find(".js_selectfile"),l=e.find(".js_dropbox"),u=e.find(".js_list"),s=e.find(".js_fileinputs"),c=this,f=0,p=0,d={},m={emptyImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=",errorMessageTimeout:5e3,maxFileSize:3145728,maxFileNumber:3,circleThumbnail:!1,maxRequestSize:9437184,invalidFileNameError:"Der Dateiname enthält ungültige Zeichen.",invalidFileTypeError:"Ein Dateiformat ist nicht zugelassen. Bitte wählen sie ein anderes Dateiformat.",maxRequestSizeError:"Das Datenlimit für den Upload von Dateien ist überschritten.",maxFileNumberError:"Sie können nur maximal 3 Dateien anhängen.",maxFileSizeError:"Eine Datei ist zu groß. Maximal 3 MB pro Datei sind zugelassen.",acceptedTypes:{"image/png":"PNG-Bild","image/jpeg":"JPEG-Bild","image/gif":"GIF-Bild","image/tiff":"TIFF-Bild","application/pdf":"PDF-Dokument","application/vnd.ms-excel":"Excel-Dokument","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"Excel-Dokument","application/msword":"Word-Dokument","application/vnd.openxmlformats-officedocument.wordprocessingml.document":"Word-Dokument"}};for(var v in m)t.hasOwnProperty(v)?(d[v]=t[v],"function"==typeof d[v]&&(d[v]=d[v].bind(c))):d[v]=m[v];var A,g=function(e){return/\.xls$/.test(e.name)&&!e.type?"application/vnd.ms-excel":e.type},h=function(e){var n,i=e.size;return i>=1099511627776?(i/=109951162777.6,n="TB"):i>=1073741824?(i/=107374182.4,n="GB"):i>=1048576?(i/=104857.6,n="MB"):i>=1024?(i/=102.4,n="kB"):(i=10*i,n="B"),Math.round(i)/10+" "+n},x=function(e){return d.acceptedTypes[g(e)]||"Unbekannt"},E=function(e){return/^image\//.test(g(e))},F=function(e){var n=$.Deferred(),i=new FileReader;return i.onload=function(i){n.resolve({data:i.target.result,nativeFile:e})},i.onerror=function(){n.reject(this)},i.readAsDataURL(e),n.promise()},y=function(e){return $.when.apply(null,e.map(function(e){return F(e)})).then(function(){return i(arguments)})},D=function(e){f+=1,p+=e.size},b=function(e){f-=1,p-=e.size},T=function(n){var i=e.find(".error");n?i.fadeOut(400,function(){i.remove()}):i.remove()},w=function(e){clearTimeout(A),A=setTimeout(function(){T(!0)},ERROR_MESSAGE_TIMEOUT),l.after($('<li class="error">'+e+"<li>"))},z=function(e){var n=!1;return f>=d.maxFileNumber&&(n=!0,w(d.maxFileNumberError)),p>=d.maxRequestSize&&(n=!0,w(d.maxRequestSizeError)),d.acceptedTypes[g(e)]||(n=!0,w(d.invalidFileTypeError)),e.size>d.maxFileSize&&(n=!0,w(d.maxFileSizeError)),/^[A-Za-z0-9.\-_ ]+$/.test(e.name)||(n=!0,w(invalidFileNameError)),!n},R=function(e,n){var i=new FileReader,r=$('<span class="thumbnail"></span>');d.circleThumbnail&&r.addClass("circle"),i.onload=function(i){var a=new Image;a.src=E(e)?i.target.result:EMPTY_IMAGE,n.prepend(r.append(a))},i.readAsDataURL(e)},S=function(e,n){var i=h(e),a=x(e),t=$('<li class="file"></li>');t.append(['<span class="label name">',e.name,'</span><span class="label size">',i,'</span><span class="label type">',a,"</span>"].join(""));var o=$("<span/>");t.append(o),o.addClass("remove"),o.on("click",function(){t.remove(),n()}),r&&R(e,t),u.append(t)},B=0,M=function(){var e=$("<input/>");B+=1,e.attr("name","fileInput"+B),e.attr("type","file"),e.addClass("fileinput"),o.prepend(e),e.on("change",function(){T(!1);var n=i($(this).prop("files"));if(n.length){var r=n[0];z(r)?(D(r),e.appendTo(s),S(r,function(){b(r),e.remove()})):e.remove(),M()}})};M();var j=function(e){T(!1);var n=i(e.originalEvent.dataTransfer.files);y(n).done(function(e){e.every(function(e){var n=e.nativeFile;if(!z(n))return!1;D(n);var i=$('<input type="hidden">');return i.val(e.data),i.attr("name","file:"+n.name),i.appendTo(s),S(n,function(){b(n),i.remove()}),!0})})};l.on("drop",function(e){a(e),$(this).removeClass("active"),j(e)}),l.on("dragenter",function(e){a(e)}),l.on("dragover",function(e){a(e),$(this).addClass("active")}),l.on("dragleave",function(e){a(e),$(this).removeClass("active")}),r||l.hide()};n.exports=t},{}]},{},[1]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJhcHAuanMiXSwibmFtZXMiOlsiZSIsInQiLCJuIiwiciIsInMiLCJvIiwidSIsImEiLCJyZXF1aXJlIiwiaSIsIkVycm9yIiwiZiIsImV4cG9ydHMiLCJjYWxsIiwibGVuZ3RoIiwxLCJFYXN5RmlsZXVwbG9hZCIsImluaXRpYWxpemVGaWxlVXBsb2FkIiwiJGZpbGVVcGxvYWQiLCIkIiwidXJsIiwib3B0aW9ucyIsIm1heEZpbGVTaXplIiwiZG9jdW1lbnQiLCJyZWFkeSIsIi4vbGliL2Vhc3lmb3JtZmlsZXVwbG9hZC5qcyIsMiwibW9kdWxlIiwidG9BcnJheSIsIm9iamVjdCIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJoYXNGaWxlUmVhZGVyIiwid2luZG93IiwiRmlsZSIsIkZpbGVMaXN0IiwiRmlsZVJlYWRlciIsIm5vUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInJldHVyblZhbHVlIiwiRWFzeUZvcm1GaWxlVXBsb2FkIiwib3B0cyIsIiRzZWxlY3RCdXR0b24iLCJmaW5kIiwiJGRyb3BCb3giLCIkZmlsZVZpZXciLCIkZmlsZUlucHV0cyIsInNlbGYiLCJ0aGlzIiwiZmlsZU51bWJlciIsInJlcXVlc3RTaXplIiwiZGVmYXVsdE9wdGlvbnMiLCJlbXB0eUltYWdlIiwiZXJyb3JNZXNzYWdlVGltZW91dCIsIm1heEZpbGVOdW1iZXIiLCJjaXJjbGVUaHVtYm5haWwiLCJtYXhSZXF1ZXN0U2l6ZSIsImludmFsaWRGaWxlTmFtZUVycm9yIiwiaW52YWxpZEZpbGVUeXBlRXJyb3IiLCJtYXhSZXF1ZXN0U2l6ZUVycm9yIiwibWF4RmlsZU51bWJlckVycm9yIiwibWF4RmlsZVNpemVFcnJvciIsImFjY2VwdGVkVHlwZXMiLCJpbWFnZS9wbmciLCJpbWFnZS9qcGVnIiwiaW1hZ2UvZ2lmIiwiaW1hZ2UvdGlmZiIsImFwcGxpY2F0aW9uL3BkZiIsImFwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCIsImFwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0IiwiYXBwbGljYXRpb24vbXN3b3JkIiwiYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImJpbmQiLCJlcnJvclRpbWVvdXRJZCIsImdldEZpbGVUeXBlIiwibmF0aXZlRmlsZSIsInRlc3QiLCJuYW1lIiwidHlwZSIsImdldFJlYWRhYmxlRmlsZVNpemUiLCJzdHJpbmciLCJzaXplIiwiTWF0aCIsInJvdW5kIiwiZ2V0UmVhZGFibGVGaWxlVHlwZSIsImlzSW1hZ2UiLCJjb252ZXJ0VG9CYXNlNjRGaWxlIiwiZGVmZXJyZWQiLCJEZWZlcnJlZCIsInJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwicmVzb2x2ZSIsImRhdGEiLCJ0YXJnZXQiLCJyZXN1bHQiLCJvbmVycm9yIiwicmVqZWN0IiwicmVhZEFzRGF0YVVSTCIsInByb21pc2UiLCJwYXJzZUJhc2U2NEZpbGVzIiwibmF0aXZlRmlsZXMiLCJ3aGVuIiwiYXBwbHkiLCJtYXAiLCJ0aGVuIiwiYXJndW1lbnRzIiwidHJhY2tGaWxlIiwidW50cmFja0ZpbGUiLCJyZW1vdmVFcnJvcnMiLCJmYWRlT3V0IiwiJGVycm9ycyIsInJlbW92ZSIsInNob3dFcnJvck1lc3NhZ2UiLCJlcnJvciIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJFUlJPUl9NRVNTQUdFX1RJTUVPVVQiLCJhZnRlciIsInZhbGlkYXRlRmlsZSIsImhhc0Vycm9ycyIsImFkZEZpbGVQcmV2aWV3IiwiJGZpbGVWaWV3RWxlbWVudCIsIiRpbWdXcmFwcGVyIiwiYWRkQ2xhc3MiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiRU1QVFlfSU1BR0UiLCJwcmVwZW5kIiwiYXBwZW5kIiwiYWRkRmlsZVRvVmlldyIsInJlbW92ZUhhbmRsZXIiLCJmaWxlU2l6ZSIsImZpbGVUeXBlIiwiam9pbiIsIiRyZW1vdmVCdXR0b24iLCJvbiIsImZpbGVJbnB1dElkIiwiYWRkTmV3RmlsZUlucHV0IiwiJGZpbGVJbnB1dCIsImF0dHIiLCJwcm9wIiwiYXBwZW5kVG8iLCJjcmVhdGVEbmRIYW5kbGVyIiwib3JpZ2luYWxFdmVudCIsImRhdGFUcmFuc2ZlciIsImZpbGVzIiwiZG9uZSIsImJhc2U2NEZpbGVzIiwiZXZlcnkiLCJiYXNlNjRGaWxlIiwiJGhpZGRlbkRhdGFGaWVsZCIsInZhbCIsInJlbW92ZUNsYXNzIiwiaGlkZSJdLCJtYXBwaW5ncyI6IkNBQUEsUUFBVUEsR0FBRUMsRUFBRUMsRUFBRUMsR0FBRyxRQUFTQyxHQUFFQyxFQUFFQyxHQUFHLElBQUlKLEVBQUVHLEdBQUcsQ0FBQyxJQUFJSixFQUFFSSxHQUFHLENBQUMsR0FBSUUsR0FBa0Isa0JBQVRDLFVBQXFCQSxPQUFRLEtBQUlGLEdBQUdDLEVBQUUsTUFBT0EsR0FBRUYsR0FBRSxFQUFJLElBQUdJLEVBQUUsTUFBT0EsR0FBRUosR0FBRSxFQUFJLE1BQU0sSUFBSUssT0FBTSx1QkFBdUJMLEVBQUUsS0FBSyxHQUFJTSxHQUFFVCxFQUFFRyxJQUFJTyxXQUFZWCxHQUFFSSxHQUFHLEdBQUdRLEtBQUtGLEVBQUVDLFFBQVEsU0FBU1osR0FBRyxHQUFJRSxHQUFFRCxFQUFFSSxHQUFHLEdBQUdMLEVBQUcsT0FBT0ksR0FBRUYsRUFBRUEsRUFBRUYsSUFBSVcsRUFBRUEsRUFBRUMsUUFBUVosRUFBRUMsRUFBRUMsRUFBRUMsR0FBRyxNQUFPRCxHQUFFRyxHQUFHTyxRQUFrRCxJQUFJLEdBQTFDSCxHQUFrQixrQkFBVEQsVUFBcUJBLFFBQWdCSCxFQUFFLEVBQUVBLEVBQUVGLEVBQUVXLE9BQU9ULElBQUlELEVBQUVELEVBQUVFLEdBQUksT0FBT0QsS0FBS1csR0FBRyxTQUFTUCxHQUN0YSxHQUFJUSxHQUFpQlIsRUFBUSwrQkFFekJTLEVBQXVCLFdBQzFCLENBQUEsR0FBSUMsR0FBY0Ms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QUFPLENBR1JnQyxHQUFVaEMsRUFFVixJQUFJNkUsR0FBbUJ4SSxFQUFFLHdCQVl6QixPQVZBd0ksR0FBaUJDLElBQUlGLEVBQVcxRCxNQUNoQzJELEVBQWlCWCxLQUFLLE9BQVEsUUFBVWxFLEVBQVdFLE1BQ25EMkUsRUFBaUJULFNBQVNsRyxHQUUxQnNGLEVBQWN4RCxFQUFZLFdBQ3pCaUMsRUFBWWpDLEdBRVo2RSxFQUFpQnhDLFlBR1gsTUFLVnJFLEdBQVM4RixHQUFHLE9BQVEsU0FBUzlDLEdBQzVCeEQsRUFBY3dELEdBQ2QzRSxFQUFFK0IsTUFBTTJHLFlBQVksVUFDcEJWLEVBQWlCckQsS0FHbEJoRCxFQUFTOEYsR0FBRyxZQUFhLFNBQVM5QyxHQUNqQ3hELEVBQWN3RCxLQUdmaEQsRUFBUzhGLEdBQUcsV0FBWSxTQUFTOUMsR0FDaEN4RCxFQUFjd0QsR0FDZDNFLEVBQUUrQixNQUFNNkUsU0FBUyxZQUdsQmpGLEVBQVM4RixHQUFHLFlBQWEsU0FBUzlDLEdBQ2pDeEQsRUFBY3dELEdBQ2QzRSxFQUFFK0IsTUFBTTJHLFlBQVksWUFHaEI1SCxHQUNKYSxFQUFTZ0gsT0FJWG5JLEdBQU9mLFFBQVU4QixZQUdOIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIEVhc3lGaWxldXBsb2FkID0gcmVxdWlyZSgnLi9saWIvZWFzeWZvcm1maWxldXBsb2FkLmpzJyk7XG5cbnZhciBpbml0aWFsaXplRmlsZVVwbG9hZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgJGZpbGVVcGxvYWQgPSAkKCcuanNfZmlsZXVwbG9hZCcpO1xuXG5cdHZhciB1cmwgPSAnLyc7XG5cblx0dmFyIG9wdGlvbnMgPSB7XG5cdFx0bWF4RmlsZVNpemU6IDYxNDU3Mjhcblx0fTtcblxuXHR2YXIgZWFzeUZpbGV1cGxvYWQgPSBuZXcgRWFzeUZpbGV1cGxvYWQoJGZpbGVVcGxvYWQsIHVybCwgb3B0aW9ucyk7XG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShpbml0aWFsaXplRmlsZVVwbG9hZCk7XG5cbn0se1wiLi9saWIvZWFzeWZvcm1maWxldXBsb2FkLmpzXCI6Mn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xudmFyIHRvQXJyYXkgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG9iamVjdCwgMCk7XG59O1xuXG52YXIgaGFzRmlsZVJlYWRlciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gISEod2luZG93LkZpbGUgJiYgd2luZG93LkZpbGVMaXN0ICYmIHdpbmRvdy5GaWxlUmVhZGVyKTtcbn07XG5cbnZhciBub1Byb3BhZ2F0aW9uID0gZnVuY3Rpb24oZSkge1xuXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xuXHRcdHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblx0fVxufTtcblxudmFyIEVhc3lGb3JtRmlsZVVwbG9hZCA9IGZ1bmN0aW9uKCRmaWxlVXBsb2FkLCB1cmwsIG9wdHMpIHtcblxuXHR2YXIgJHNlbGVjdEJ1dHRvbiA9ICRmaWxlVXBsb2FkLmZpbmQoJy5qc19zZWxlY3RmaWxlJyk7XG5cdHZhciAkZHJvcEJveCAgICAgID0gJGZpbGVVcGxvYWQuZmluZCgnLmpzX2Ryb3Bib3gnKTtcblx0dmFyICRmaWxlVmlldyAgICAgPSAkZmlsZVVwbG9hZC5maW5kKCcuanNfbGlzdCcpO1xuXHR2YXIgJGZpbGVJbnB1dHMgICA9ICRmaWxlVXBsb2FkLmZpbmQoJy5qc19maWxlaW5wdXRzJyk7XG5cblx0dmFyIHNlbGYgICAgICAgID0gdGhpcztcblx0dmFyIGZpbGVOdW1iZXIgID0gMDtcblx0dmFyIHJlcXVlc3RTaXplID0gMDtcblx0dmFyIG9wdGlvbnMgICAgID0ge307XG5cblx0dmFyIGRlZmF1bHRPcHRpb25zID0ge1xuXG5cdFx0LyoqXG5cdFx0ICogW2VtcHR5SW1hZ2UgZGVzY3JpcHRpb25dXG5cdFx0ICogQHR5cGUge1N0cmluZ31cblx0XHQgKi9cblx0XHRlbXB0eUltYWdlOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQVFNQUFBQWwyMWJLQUFBQUExQk1WRVVBQUFDbmVqM2FBQUFBQVhSU1RsTUFRT2JZWmdBQUFBcEpSRUZVQ05kallBQUFBQUlBQWVJaHZETUFBQUFBU1VWT1JLNUNZSUk9JyxcblxuXHRcdC8qKlxuXHRcdCAqIFtlcnJvck1lc3NhZ2VUaW1lb3V0IGRlc2NyaXB0aW9uXVxuXHRcdCAqIEB0eXBlIHtOdW1iZXJ9XG5cdFx0ICovXG5cdFx0ZXJyb3JNZXNzYWdlVGltZW91dDogNTAwMCxcblxuXHRcdC8qKlxuXHRcdCAqIFttYXhGaWxlU2l6ZSBkZXNjcmlwdGlvbl1cblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxuXHRcdCAqL1xuXHRcdG1heEZpbGVTaXplOiAzMTQ1NzI4LFxuXG5cdFx0LyoqXG5cdFx0ICogW21heEZpbGVOdW1iZXIgZGVzY3JpcHRpb25dXG5cdFx0ICogQHR5cGUge051bWJlcn1cblx0XHQgKi9cblx0XHRtYXhGaWxlTnVtYmVyOiAzLFxuXG5cdFx0LyoqXG5cdFx0ICogW3JvdW5kZWRUaHVtYm5haWwgZGVzY3JpcHRpb25dXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0Y2lyY2xlVGh1bWJuYWlsOiBmYWxzZSxcblxuXHRcdC8qKlxuXHRcdCAqIFttYXhSZXF1ZXN0U2l6ZSBkZXNjcmlwdGlvbl1cblx0XHQgKiBAdHlwZSB7TnVtYmVyfVxuXHRcdCAqL1xuXHRcdG1heFJlcXVlc3RTaXplOiA5NDM3MTg0LFxuXG5cdFx0LyoqXG5cdFx0ICogW2ludmFsaWRGaWxlTmFtZUVycm9yIGRlc2NyaXB0aW9uXVxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0aW52YWxpZEZpbGVOYW1lRXJyb3I6ICdEZXIgRGF0ZWluYW1lIGVudGjDpGx0IHVuZ8O8bHRpZ2UgWmVpY2hlbi4nLFxuXG5cdFx0LyoqXG5cdFx0ICogW2ludmFsaWRGaWxlVHlwZUVycm9yIGRlc2NyaXB0aW9uXVxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0aW52YWxpZEZpbGVUeXBlRXJyb3I6ICdFaW4gRGF0ZWlmb3JtYXQgaXN0IG5pY2h0IHp1Z2VsYXNzZW4uIEJpdHRlIHfDpGhsZW4gc2llIGVpbiBhbmRlcmVzIERhdGVpZm9ybWF0LicsXG5cblx0XHQvKipcblx0XHQgKiBbbWF4UmVxdWVzdFNpemVFcnJvciBkZXNjcmlwdGlvbl1cblx0XHQgKiBAdHlwZSB7U3RyaW5nfVxuXHRcdCAqL1xuXHRcdG1heFJlcXVlc3RTaXplRXJyb3I6ICdEYXMgRGF0ZW5saW1pdCBmw7xyIGRlbiBVcGxvYWQgdm9uIERhdGVpZW4gaXN0IMO8YmVyc2Nocml0dGVuLicsXG5cblx0XHQvKipcblx0XHQgKiBbbWF4RmlsZU51bWJlckVycm9yIGRlc2NyaXB0aW9uXVxuXHRcdCAqIEB0eXBlIHtTdHJpbmd9XG5cdFx0ICovXG5cdFx0bWF4RmlsZU51bWJlckVycm9yOiAnU2llIGvDtm5uZW4gbnVyIG1heGltYWwgMyBEYXRlaWVuIGFuaMOkbmdlbi4nLFxuXG5cdFx0LyoqXG5cdFx0ICogW21heEZpbGVTaXplRXJyb3IgZGVzY3JpcHRpb25dXG5cdFx0ICogQHR5cGUge1N0cmluZ31cblx0XHQgKi9cblx0XHRtYXhGaWxlU2l6ZUVycm9yOiAnRWluZSBEYXRlaSBpc3QgenUgZ3Jvw58uIE1heGltYWwgMyBNQiBwcm8gRGF0ZWkgc2luZCB6dWdlbGFzc2VuLicsXG5cblx0XHQvKipcblx0XHQgKiBbYWNjZXB0ZWRUeXBlcyBkZXNjcmlwdGlvbl1cblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdGFjY2VwdGVkVHlwZXM6IHtcblx0XHRcdCdpbWFnZS9wbmcnOiAnUE5HLUJpbGQnLFxuXHRcdFx0J2ltYWdlL2pwZWcnOiAnSlBFRy1CaWxkJyxcblx0XHRcdCdpbWFnZS9naWYnOiAnR0lGLUJpbGQnLFxuXHRcdFx0J2ltYWdlL3RpZmYnOiAnVElGRi1CaWxkJyxcblx0XHRcdCdhcHBsaWNhdGlvbi9wZGYnOiAnUERGLURva3VtZW50Jyxcblx0XHRcdCdhcHBsaWNhdGlvbi92bmQubXMtZXhjZWwnOiAnRXhjZWwtRG9rdW1lbnQnLFxuXHRcdFx0J2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0JzogJ0V4Y2VsLURva3VtZW50Jyxcblx0XHRcdCdhcHBsaWNhdGlvbi9tc3dvcmQnOiAnV29yZC1Eb2t1bWVudCcsXG5cdFx0XHQnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LndvcmRwcm9jZXNzaW5nbWwuZG9jdW1lbnQnOiAnV29yZC1Eb2t1bWVudCdcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIE1lcmdlIGRlZmF1bHRvcHRpb25zIGFuZCB1c2Vyb3B0aW9ucyBpbiBvbmUgb2JqZWN0XG5cdCAqL1xuXHRmb3IgKHZhciBpIGluIGRlZmF1bHRPcHRpb25zKSB7XG5cdFx0aWYob3B0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuXHRcdFx0b3B0aW9uc1tpXSA9IG9wdHNbaV07XG5cdFx0XHRpZiAodHlwZW9mKG9wdGlvbnNbaV0pID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdG9wdGlvbnNbaV0gPSBvcHRpb25zW2ldLmJpbmQoc2VsZik7XG5cdFx0XHR9XG5cdFx0fSBlbHNle1xuXHRcdFx0b3B0aW9uc1tpXSA9IGRlZmF1bHRPcHRpb25zW2ldO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBGaWxldHlwZVxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IG5hdGl2ZUZpbGUgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0dmFyIGdldEZpbGVUeXBlID0gZnVuY3Rpb24gKG5hdGl2ZUZpbGUpIHtcblx0XHQvLyBGaXggY2hyb21pdW0gaXNzdWUgMTA1MzgyOiBFeGNlbCAoLnhscykgRmlsZVJlYWRlciBtaW1lIHR5cGUgaXMgZW1wdHkuXG5cdFx0aWYgKCgvXFwueGxzJC8pLnRlc3QobmF0aXZlRmlsZS5uYW1lKSAmJiAhbmF0aXZlRmlsZS50eXBlKSB7XG5cdFx0XHRyZXR1cm4gJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCc7XG5cdFx0fVxuXHRcdHJldHVybiBuYXRpdmVGaWxlLnR5cGU7XG5cdH07XG5cblx0LyoqXG5cdCAqIFRha2VzIHRoZSBuYXRpdmUgZmlsZXNpemUgaW4gYnl0ZXMgYW5kIHJldHVybnMgdGhlIHByZXR0aWZpZWQgZmlsZXNpemVcblx0ICogQHBhcmFtICB7W3R5cGVdfSBuYXRpdmVGaWxlIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdHZhciBnZXRSZWFkYWJsZUZpbGVTaXplID0gZnVuY3Rpb24obmF0aXZlRmlsZSkge1xuXHRcdHZhciBzaXplID0gbmF0aXZlRmlsZS5zaXplO1xuXG5cdFx0dmFyIHN0cmluZztcblxuXHRcdGlmIChzaXplID49IDEwMjQgKiAxMDI0ICogMTAyNCAqIDEwMjQgKSB7XG5cdFx0XHRzaXplID0gc2l6ZSAvICgxMDI0ICogMTAyNCAqIDEwMjQgKiAxMDI0IC8gMTApO1xuXHRcdFx0c3RyaW5nID0gJ1RCJztcblx0XHR9IGVsc2UgaWYgKHNpemUgPj0gMTAyNCAqIDEwMjQgKiAxMDI0ICkge1xuXHRcdFx0c2l6ZSA9IHNpemUgLyAoMTAyNCAqIDEwMjQgKiAxMDI0IC8gMTApO1xuXHRcdFx0c3RyaW5nID0gJ0dCJztcblx0XHR9IGVsc2UgaWYgKHNpemUgPj0gMTAyNCAqIDEwMjQpIHtcblx0XHRcdHNpemUgPSBzaXplIC8gKDEwMjQgKiAxMDI0IC8gMTApO1xuXHRcdFx0c3RyaW5nID0gJ01CJztcblx0XHR9IGVsc2UgaWYgKHNpemUgPj0gMTAyNCkge1xuXHRcdFx0c2l6ZSA9IHNpemUgLyAoMTAyNCAvIDEwKTtcblx0XHRcdHN0cmluZyA9ICdrQic7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNpemUgPSBzaXplICogMTA7XG5cdFx0XHRzdHJpbmcgPSAnQic7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChNYXRoLnJvdW5kKHNpemUpIC8gMTApICsgJyAnICsgc3RyaW5nO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBbZ2V0UmVhZGFibGVGaWxlVHlwZSBkZXNjcmlwdGlvbl1cblx0ICogQHBhcmFtICB7W3R5cGVdfSBuYXRpdmVGaWxlIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdHZhciBnZXRSZWFkYWJsZUZpbGVUeXBlID0gZnVuY3Rpb24gKG5hdGl2ZUZpbGUpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hY2NlcHRlZFR5cGVzW2dldEZpbGVUeXBlKG5hdGl2ZUZpbGUpXSB8fCAnVW5iZWthbm50Jztcblx0fTtcblxuXHR2YXIgaXNJbWFnZSA9IGZ1bmN0aW9uKG5hdGl2ZUZpbGUpIHtcblx0XHRyZXR1cm4gKC9eaW1hZ2VcXC8vKS50ZXN0KGdldEZpbGVUeXBlKG5hdGl2ZUZpbGUpKTtcblx0fTtcblxuXHR2YXIgY29udmVydFRvQmFzZTY0RmlsZSA9IGZ1bmN0aW9uIChuYXRpdmVGaWxlKSB7XG5cdFx0dmFyIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuXHRcdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG5cdFx0cmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZSh7XG5cdFx0XHRcdGRhdGE6IGV2ZW50LnRhcmdldC5yZXN1bHQsXG5cdFx0XHRcdG5hdGl2ZUZpbGUgOiBuYXRpdmVGaWxlXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpe1xuXHRcdFx0ZGVmZXJyZWQucmVqZWN0KHRoaXMpO1xuXHRcdH07XG5cblx0XHRyZWFkZXIucmVhZEFzRGF0YVVSTChuYXRpdmVGaWxlKTtcblxuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH07XG5cblx0dmFyIHBhcnNlQmFzZTY0RmlsZXMgPSBmdW5jdGlvbiAobmF0aXZlRmlsZXMpIHtcblx0XHRyZXR1cm4gJC53aGVuLmFwcGx5KG51bGwsIG5hdGl2ZUZpbGVzLm1hcChmdW5jdGlvbiAobmF0aXZlRmlsZSkge1xuXHRcdFx0cmV0dXJuIGNvbnZlcnRUb0Jhc2U2NEZpbGUobmF0aXZlRmlsZSk7XG5cdFx0fSkpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIHRvQXJyYXkoYXJndW1lbnRzKTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgdHJhY2tGaWxlID0gZnVuY3Rpb24gKG5hdGl2ZUZpbGUpIHtcblx0XHRmaWxlTnVtYmVyICs9IDE7XG5cdFx0cmVxdWVzdFNpemUgKz0gbmF0aXZlRmlsZS5zaXplO1xuXHR9O1xuXG5cdHZhciB1bnRyYWNrRmlsZSA9IGZ1bmN0aW9uIChuYXRpdmVGaWxlKSB7XG5cdFx0ZmlsZU51bWJlciAtPSAxO1xuXHRcdHJlcXVlc3RTaXplIC09IG5hdGl2ZUZpbGUuc2l6ZTtcblx0fTtcblxuXHR2YXIgcmVtb3ZlRXJyb3JzID0gZnVuY3Rpb24gKGZhZGVPdXQpIHtcblx0XHR2YXIgJGVycm9ycyA9ICRmaWxlVXBsb2FkLmZpbmQoJy5lcnJvcicpO1xuXG5cdFx0aWYgKGZhZGVPdXQpIHtcblx0XHRcdCRlcnJvcnMuZmFkZU91dCg0MDAsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0JGVycm9ycy5yZW1vdmUoKTtcblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkZXJyb3JzLnJlbW92ZSgpO1xuXHRcdH1cblx0fTtcblxuXHR2YXIgZXJyb3JUaW1lb3V0SWQ7XG5cblx0dmFyIHNob3dFcnJvck1lc3NhZ2UgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRjbGVhclRpbWVvdXQoZXJyb3JUaW1lb3V0SWQpO1xuXG5cdFx0ZXJyb3JUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZUVycm9ycyh0cnVlKTtcblx0XHR9LCBFUlJPUl9NRVNTQUdFX1RJTUVPVVQpO1xuXG5cdFx0JGRyb3BCb3guYWZ0ZXIoJCgnPGxpIGNsYXNzPVwiZXJyb3JcIj4nICsgZXJyb3IgKyAnPGxpPicpKTtcblx0fTtcblxuXHR2YXIgdmFsaWRhdGVGaWxlID0gZnVuY3Rpb24obmF0aXZlRmlsZSkge1xuXHRcdHZhciBoYXNFcnJvcnMgPSBmYWxzZTtcblxuXHRcdGlmIChmaWxlTnVtYmVyID49IG9wdGlvbnMubWF4RmlsZU51bWJlcikge1xuXHRcdFx0aGFzRXJyb3JzID0gdHJ1ZTtcblx0XHRcdHNob3dFcnJvck1lc3NhZ2Uob3B0aW9ucy5tYXhGaWxlTnVtYmVyRXJyb3IpO1xuXHRcdH1cblxuXHRcdGlmIChyZXF1ZXN0U2l6ZSA+PSBvcHRpb25zLm1heFJlcXVlc3RTaXplKSB7XG5cdFx0XHRoYXNFcnJvcnMgPSB0cnVlO1xuXHRcdFx0c2hvd0Vycm9yTWVzc2FnZShvcHRpb25zLm1heFJlcXVlc3RTaXplRXJyb3IpO1xuXHRcdH1cblxuXHRcdGlmICghb3B0aW9ucy5hY2NlcHRlZFR5cGVzW2dldEZpbGVUeXBlKG5hdGl2ZUZpbGUpXSkge1xuXHRcdFx0aGFzRXJyb3JzID0gdHJ1ZTtcblx0XHRcdHNob3dFcnJvck1lc3NhZ2Uob3B0aW9ucy5pbnZhbGlkRmlsZVR5cGVFcnJvcik7XG5cdFx0fVxuXG5cdFx0aWYgKG5hdGl2ZUZpbGUuc2l6ZSA+IG9wdGlvbnMubWF4RmlsZVNpemUpIHtcblx0XHRcdGhhc0Vycm9ycyA9IHRydWU7XG5cdFx0XHRzaG93RXJyb3JNZXNzYWdlKG9wdGlvbnMubWF4RmlsZVNpemVFcnJvcik7XG5cdFx0fVxuXG5cdFx0aWYgKCEoL15bQS1aYS16MC05LlxcLV8gXSskLykudGVzdChuYXRpdmVGaWxlLm5hbWUpKSB7XG5cdFx0XHRoYXNFcnJvcnMgPSB0cnVlO1xuXHRcdFx0c2hvd0Vycm9yTWVzc2FnZShpbnZhbGlkRmlsZU5hbWVFcnJvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICFoYXNFcnJvcnM7XG5cdH07XG5cblx0dmFyIGFkZEZpbGVQcmV2aWV3ID0gZnVuY3Rpb24obmF0aXZlRmlsZSwgJGZpbGVWaWV3RWxlbWVudCkge1xuXHRcdHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXG5cdFx0dmFyICRpbWdXcmFwcGVyID0gJCgnPHNwYW4gY2xhc3M9XCJ0aHVtYm5haWxcIj48L3NwYW4+Jyk7XG5cblx0XHRpZighIW9wdGlvbnMuY2lyY2xlVGh1bWJuYWlsKXtcblx0XHRcdCRpbWdXcmFwcGVyLmFkZENsYXNzKCdjaXJjbGUnKTtcblx0XHR9XG5cblx0XHRyZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHR2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblxuXHRcdFx0aWYgKGlzSW1hZ2UobmF0aXZlRmlsZSkpIHtcblx0XHRcdFx0aW1hZ2Uuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGltYWdlLnNyYyA9IEVNUFRZX0lNQUdFO1xuXHRcdFx0fVxuXG5cdFx0XHQkZmlsZVZpZXdFbGVtZW50LnByZXBlbmQoJGltZ1dyYXBwZXIuYXBwZW5kKGltYWdlKSk7XG5cdFx0fTtcblxuXHRcdHJlYWRlci5yZWFkQXNEYXRhVVJMKG5hdGl2ZUZpbGUpO1xuXHR9O1xuXG5cdHZhciBhZGRGaWxlVG9WaWV3ID0gZnVuY3Rpb24obmF0aXZlRmlsZSwgcmVtb3ZlSGFuZGxlcikge1xuXHRcdHZhciBmaWxlU2l6ZSA9IGdldFJlYWRhYmxlRmlsZVNpemUobmF0aXZlRmlsZSk7XG5cdFx0dmFyIGZpbGVUeXBlID0gZ2V0UmVhZGFibGVGaWxlVHlwZShuYXRpdmVGaWxlKTtcblxuXHRcdHZhciAkZmlsZVZpZXdFbGVtZW50ID0gJCgnPGxpIGNsYXNzPVwiZmlsZVwiPjwvbGk+Jyk7XG5cblx0XHQkZmlsZVZpZXdFbGVtZW50LmFwcGVuZChbXG5cdFx0XHQnPHNwYW4gY2xhc3M9XCJsYWJlbCBuYW1lXCI+Jyxcblx0XHRcdG5hdGl2ZUZpbGUubmFtZSxcblx0XHRcdCc8L3NwYW4+PHNwYW4gY2xhc3M9XCJsYWJlbCBzaXplXCI+Jyxcblx0XHRcdGZpbGVTaXplLFxuXHRcdFx0Jzwvc3Bhbj48c3BhbiBjbGFzcz1cImxhYmVsIHR5cGVcIj4nLFxuXHRcdFx0ZmlsZVR5cGUsXG5cdFx0XHQnPC9zcGFuPidcblx0XHRdLmpvaW4oJycpKTtcblxuXHRcdHZhciAkcmVtb3ZlQnV0dG9uID0gJCgnPHNwYW4vPicpO1xuXG5cdFx0JGZpbGVWaWV3RWxlbWVudC5hcHBlbmQoJHJlbW92ZUJ1dHRvbik7XG5cblx0XHQkcmVtb3ZlQnV0dG9uLmFkZENsYXNzKCdyZW1vdmUnKTtcblxuXHRcdCRyZW1vdmVCdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0JGZpbGVWaWV3RWxlbWVudC5yZW1vdmUoKTtcblxuXHRcdFx0cmVtb3ZlSGFuZGxlcigpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKGhhc0ZpbGVSZWFkZXIpIHtcblx0XHRcdGFkZEZpbGVQcmV2aWV3KG5hdGl2ZUZpbGUsICRmaWxlVmlld0VsZW1lbnQpO1xuXHRcdH1cblxuXHRcdCRmaWxlVmlldy5hcHBlbmQoJGZpbGVWaWV3RWxlbWVudCk7XG5cdH07XG5cblx0dmFyIGZpbGVJbnB1dElkID0gMDtcblxuXHR2YXIgYWRkTmV3RmlsZUlucHV0ID0gZnVuY3Rpb24gKCkge1xuXHRcdHZhciAkZmlsZUlucHV0ID0gJCgnPGlucHV0Lz4nKTtcblxuXHRcdGZpbGVJbnB1dElkICs9IDE7XG5cblx0XHQkZmlsZUlucHV0LmF0dHIoJ25hbWUnLCAnZmlsZUlucHV0JyArIGZpbGVJbnB1dElkKTtcblx0XHQkZmlsZUlucHV0LmF0dHIoJ3R5cGUnLCAnZmlsZScpO1xuXHRcdCRmaWxlSW5wdXQuYWRkQ2xhc3MoJ2ZpbGVpbnB1dCcpO1xuXG5cdFx0JHNlbGVjdEJ1dHRvbi5wcmVwZW5kKCRmaWxlSW5wdXQpO1xuXG5cdFx0JGZpbGVJbnB1dC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlRXJyb3JzKGZhbHNlKTtcblxuXHRcdFx0dmFyIG5hdGl2ZUZpbGVzID0gdG9BcnJheSgkKHRoaXMpLnByb3AoJ2ZpbGVzJykpO1xuXG5cdFx0XHRpZiAoIW5hdGl2ZUZpbGVzLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBuYXRpdmVGaWxlID0gbmF0aXZlRmlsZXNbMF07XG5cblx0XHRcdGlmICghdmFsaWRhdGVGaWxlKG5hdGl2ZUZpbGUpKSB7XG5cdFx0XHRcdCRmaWxlSW5wdXQucmVtb3ZlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0cmFja0ZpbGUobmF0aXZlRmlsZSk7XG5cblx0XHRcdFx0JGZpbGVJbnB1dC5hcHBlbmRUbygkZmlsZUlucHV0cyk7XG5cblx0XHRcdFx0YWRkRmlsZVRvVmlldyhuYXRpdmVGaWxlLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0dW50cmFja0ZpbGUobmF0aXZlRmlsZSk7XG5cblx0XHRcdFx0XHQkZmlsZUlucHV0LnJlbW92ZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0YWRkTmV3RmlsZUlucHV0KCk7XG5cdFx0fSk7XG5cdH07XG5cblx0YWRkTmV3RmlsZUlucHV0KCk7XG5cblx0dmFyIGNyZWF0ZURuZEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcblx0XHRyZW1vdmVFcnJvcnMoZmFsc2UpO1xuXG5cdFx0dmFyIG5hdGl2ZUZpbGVzID0gdG9BcnJheShldmVudC5vcmlnaW5hbEV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG5cblx0XHRwYXJzZUJhc2U2NEZpbGVzKG5hdGl2ZUZpbGVzKS5kb25lKGZ1bmN0aW9uIChiYXNlNjRGaWxlcykge1xuXHRcdFx0YmFzZTY0RmlsZXMuZXZlcnkoZnVuY3Rpb24gKGJhc2U2NEZpbGUpIHtcblx0XHRcdFx0dmFyIG5hdGl2ZUZpbGUgPSBiYXNlNjRGaWxlLm5hdGl2ZUZpbGU7XG5cblx0XHRcdFx0aWYgKCF2YWxpZGF0ZUZpbGUobmF0aXZlRmlsZSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR0cmFja0ZpbGUobmF0aXZlRmlsZSk7XG5cblx0XHRcdFx0dmFyICRoaWRkZW5EYXRhRmllbGQgPSAkKCc8aW5wdXQgdHlwZT1cImhpZGRlblwiPicpO1xuXG5cdFx0XHRcdCRoaWRkZW5EYXRhRmllbGQudmFsKGJhc2U2NEZpbGUuZGF0YSk7XG5cdFx0XHRcdCRoaWRkZW5EYXRhRmllbGQuYXR0cignbmFtZScsICdmaWxlOicgKyBuYXRpdmVGaWxlLm5hbWUpO1xuXHRcdFx0XHQkaGlkZGVuRGF0YUZpZWxkLmFwcGVuZFRvKCRmaWxlSW5wdXRzKTtcblxuXHRcdFx0XHRhZGRGaWxlVG9WaWV3KG5hdGl2ZUZpbGUsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR1bnRyYWNrRmlsZShuYXRpdmVGaWxlKTtcblxuXHRcdFx0XHRcdCRoaWRkZW5EYXRhRmllbGQucmVtb3ZlKCk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH07XG5cblx0JGRyb3BCb3gub24oJ2Ryb3AnLCBmdW5jdGlvbihldmVudCkge1xuXHRcdG5vUHJvcGFnYXRpb24oZXZlbnQpO1xuXHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdGNyZWF0ZURuZEhhbmRsZXIoZXZlbnQpO1xuXHR9KTtcblxuXHQkZHJvcEJveC5vbignZHJhZ2VudGVyJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRub1Byb3BhZ2F0aW9uKGV2ZW50KTtcblx0fSk7XG5cblx0JGRyb3BCb3gub24oJ2RyYWdvdmVyJywgZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRub1Byb3BhZ2F0aW9uKGV2ZW50KTtcblx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcblx0fSk7XG5cblx0JGRyb3BCb3gub24oJ2RyYWdsZWF2ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0bm9Qcm9wYWdhdGlvbihldmVudCk7XG5cdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cdH0pO1xuXG5cdGlmICghaGFzRmlsZVJlYWRlcikge1xuXHRcdCRkcm9wQm94LmhpZGUoKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFYXN5Rm9ybUZpbGVVcGxvYWQ7XG5cblxufSx7fV19LHt9LFsxXSkiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=