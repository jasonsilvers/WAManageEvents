import {ById, IEntity} from "../types/State";

interface IEntityBase<E> {
    Id?: number
}

export const createEntities = <T extends IEntityBase<T>>(entities: T[]): IEntity<T> => {
    const startEntityObject: ById<T> = {}
    const entitiesById: ById<T> | T = entities.reduce((newEntity: ById<T> | T, entity) => {
        return entity.Id
            ? {
                ...newEntity,
                [entity.Id]: {
                    ...entity
                }
            }
            : entity;
    }, startEntityObject);

    const allIds = entities
        .map(entity => entity.Id?.toString())
        .filter(entityId => entityId !== '');

    return {
        byId: entitiesById,
        allIds: allIds
    } as IEntity<T>
}