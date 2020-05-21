import {ById, IEntity} from "../types/State";

interface IEntityBase<E> {
    id?: string
}

export const createEntities = <T extends IEntityBase<T>>(entities: T[]): IEntity<T> => {
    const startEntityObject: ById<T> = {}
    const entitiesById: ById<T> | T = entities.reduce((newEntity: ById<T> | T, entity) => {
        return entity.id
            ? {
                ...newEntity,
                [entity.id]: {
                    ...entity
                }
            }
            : entity;
    }, startEntityObject);

    const allIds = entities
        .map(entity => entity.id)
        .filter(entityId => entityId !== '');

    return {
        byId: entitiesById,
        allIds: allIds
    } as IEntity<T>
}