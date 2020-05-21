import mockAxios from 'axios';
import {getTeachersAsync, setTeachers, setUserName} from "./actions";
import {DefaultApi, Teacher} from "../api";

it('should call the api to get teachers and dispatch for set teacher if valid', async () => {
    const t1 = {
        id: '837648ef-8f07-447a-b207-646cd821c187',
        name: 'Bob Anderson',
        pictureUrl: 'bob.anderson.jpg',
        email: 'bob.anderson@gmail.com'
    } as Teacher

    const t2 = {
        id: '926712e6-4428-4229-9071-5b3178bd4ea6',
        name: 'Frank Smith',
        pictureUrl: 'frank.smith.jpg',
        email: 'frank.smith@gmail.com'
    } as Teacher

    const teachers = [t1, t2];
    //mocks
    const dispatch = jest.fn();
    const getState = jest.fn();
    const getTeachersThunk = getTeachersAsync();

    (mockAxios.request as jest.Mock).mockImplementation(() => Promise.resolve({data: teachers}))
    await getTeachersThunk(dispatch, getState,  () => new DefaultApi())
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(setTeachers(teachers));
});