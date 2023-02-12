import React from 'react';
import {render,screen} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './button'
it("button renders correctly1",()=>{
    const {getByTestId} = render(<Button label="click me please"></Button>);
    expect(getByTestId('button1')).toHaveTextContent(/^hey click me please$/);
})
it("button renders correctly2",()=>{
    render(<Button label="Hi"></Button>);
    expect(screen.getByTestId('button1')).toHaveTextContent(/^hey Hi$/);
})
it("button renders correctly3",()=>{
    const {getByTestId} = render(<Button label="i am the button"></Button>);
    expect(getByTestId('button1')).toHaveTextContent(/^hey i am the button$/);
})

it("matches snapshot 1",()=>{
    const tree = renderer.create(<Button label="button1"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

it("matches snapshot 2",()=>{
    const tree = renderer.create(<Button label="button2"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})




