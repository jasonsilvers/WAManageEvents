import '@testing-library/jest-dom/extend-expect'
import {cleanup} from "@testing-library/react";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

/**
 * The React testing library requires a clean up method to be called
 * if using the render method
 * Failure to call the clean up method will lead to tests failing that do not fail when ran alone
 * This after each function is now global for all tests
 *
 * author: Mr 🐍
 */
afterEach(() => {
    cleanup();
});