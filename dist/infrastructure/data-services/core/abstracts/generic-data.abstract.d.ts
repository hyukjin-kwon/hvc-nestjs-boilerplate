export declare abstract class IGenericData<T, Y> {
    abstract get(id: string, additionalInfo?: Y): Promise<T>;
}
