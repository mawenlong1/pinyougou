//品牌服务
app.service("brandService", function ($http) {
    this.findAll = function () {
        return $http.get('../brand/findAll.do');
    };
    this.findPage = function (page, size) {
        return $http.get('../brand/findPage.do?page=' + page + '&size=' + size)
    };
    this.getById = function (id) {
        return $http.get('../brand/getById.do?id=' + id);
    };
    this.add = function (entity) {
        return $http.post('../brand/add.do', entity);
    };
    this.update = function () {
        return $http.post('../brand/update.do', entity);
    };
    this.dele = function (ids) {
        return $http.get('../brand/delete.do?ids=' + ids);
    };
    this.search = function (page, size, entity) {
        return $http.post('../brand/search.do?page=' + page + '&size=' + size, entity);
    };
    //下拉列表数据
    this.selectOptionList = function () {
        return $http.get('../brand/selectOptionList.do?');
    }
});