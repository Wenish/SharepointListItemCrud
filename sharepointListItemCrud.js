//https://github.com/Wenish/SharepointListItemCrud/blob/master/sharepointListItemCrud.js
//© Jonas Voland
var SharepointListItemCrud = function () {}
SharepointListItemCrud.prototype.create = function (listName, data, options) {
  var options = options || {}
  var successCallback = options.successCallback || function(){}
  var errorCallback = options.errorCallback || function(err){console.log(JSON.stringify(err));}
  $.ajax({
    url: _spPageContextInfo.webServerRelativeUrl +
    "/_api/web/lists/getByTitle('" + listName + "')/items",
    type: "POST",
    contentType: "application/json;odata=verbose",
    data: JSON.stringify(data),
    headers: {
      "accept": "application/json;odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val()
    },
    success: successCallback,
    error: errorCallback
  });
}
SharepointListItemCrud.prototype.read = function (listName, options) {
  var options = options || {}
  var query = options.query || ''
  var successCallback = options.successCallback || function(){}
  var errorCallback = options.errorCallback || function(err){console.log(JSON.stringify(err));}
  $.ajax({
    url: _spPageContextInfo.webServerRelativeUrl +
    "/_api/web/lists/getbytitle('" + listName + "')/items" + query,
    type: "GET",
    headers: {
      "accept": "application/json;odata=verbose",
    },
    success: successCallback,
    error: errorCallback
  });
}
SharepointListItemCrud.prototype.update = function (listName, id, data, options) {
  var options = options || {}
  var successCallback = options.successCallback || function(){}
  var errorCallback = options.errorCallback || function(err){console.log(JSON.stringify(err));}
  $.ajax({
    url: _spPageContextInfo.webServerRelativeUrl +
    "/_api/web/lists/getByTitle('" + listName + "')/getItemByStringId('" + id + "')",
    type: "POST",
    contentType: "application/json;odata=verbose",
    data: JSON.stringify(data),
    headers: {
      "accept": "application/json;odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val(),
      "IF-MATCH": "*",
      "X-Http-Method": "PATCH"
    },
    success: successCallback,
    error: errorCallback
  });
}
SharepointListItemCrud.prototype.delete = function (listName, id, options) {
  var options = options || {}
  var successCallback = options.successCallback || function(){}
  var errorCallback = options.errorCallback || function(err){console.log(JSON.stringify(err));}
  $.ajax({
    url: _spPageContextInfo.webServerRelativeUrl +
    "/_api/web/lists/getByTitle('" + listName + "')/getItemByStringId('" + id + "')",
    type: "DELETE",
    headers: {
      "accept": "application/json;odata=verbose",
      "X-RequestDigest": $("#__REQUESTDIGEST").val(),
      "IF-MATCH": "*"
    },
    success: successCallback,
    error: errorCallback
  });
}
