

export abstract class IGenericData<T,Y>{
    abstract get(id: string, additionalInfo? : Y): Promise<T>;
    // abstract create(item: T): Promise<T>;
    // abstract update(id: string, item: T);
}