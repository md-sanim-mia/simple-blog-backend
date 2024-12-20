import { Query } from "mongoose";

class queryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchFields: string[]) {
    const searchTerm = this?.query?.search;

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
    const queryObj = { ...this?.query };
    const excludeFields = ["search", "sortBy", "sortOrder"];

    excludeFields.forEach((el) => delete queryObj[el]);
    this.modelQuery = this.modelQuery.find(queryObj);
    return this;
  }
  sort() {
    const sortBy = this?.query?.sortBy || "createdAt";

    this.modelQuery = this.modelQuery.sort(sortBy as string);

    return this;
  }
  sortOrder() {
    const sortOrder = this?.query?.sortBy || "-createdAt";
    this.modelQuery = this.modelQuery.sort(sortOrder as string);
    return this;
  }
}
export default queryBuilder;
