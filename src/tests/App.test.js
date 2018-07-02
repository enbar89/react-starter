import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from '../App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapper = shallow(<App/>);

test('renders without crashing', () =>
{
    const container = wrapper.find('.src-app--container');

    expect(container.length).toBe(1);
});