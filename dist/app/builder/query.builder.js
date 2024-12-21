"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class queryBuilder {
    constructor(modelQuery, query) {
        this.modelQuery = modelQuery;
        this.query = query;
    }
    search(searchFields) {
        var _a;
        const searchTerm = (_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.search;
        const searchField = searchFields.map((filed) => ({
            [filed]: { $regex: searchTerm, $options: "i" },
        }));
        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchField,
            });
        }
        return this;
    }
    filter() {
        const queryObj = Object.assign({}, this === null || this === void 0 ? void 0 : this.query);
        const excludeFields = ["search", "sortBy", "sortOrder"];
        console.log(queryObj);
        excludeFields.forEach((el) => delete queryObj[el]);
        this.modelQuery = this.modelQuery.find({ author: queryObj === null || queryObj === void 0 ? void 0 : queryObj.filter });
        return this;
    }
    sort() {
        var _a;
        const sortBy = ((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.sortBy) || "createdAt";
        this.modelQuery = this.modelQuery.sort(sortBy);
        return this;
    }
    sortOrder() {
        var _a;
        const sortOrder = ((_a = this === null || this === void 0 ? void 0 : this.query) === null || _a === void 0 ? void 0 : _a.sortBy) || "-createdAt";
        this.modelQuery = this.modelQuery.sort(sortOrder);
        return this;
    }
}
exports.default = queryBuilder;
