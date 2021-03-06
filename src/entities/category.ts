import { entity, objectIdColumn, column, idColumn } from "fulton-server";

@entity("categories")
export class Category {
    @idColumn() // idColumn() is for the _id property, but the type isn't object id
    categoryId: number;

    @column()
    categoryName: string;

    @column()
    description: string;

    @column()
    picture: string;
}