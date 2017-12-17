import React from 'react';
import { renderToString } from 'react-dom/server';
import { mount, render } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import Loader from '../index';

describe('Full DOM Rendering', () => {
  it('allows us to set props', () => {
    const wrapper = mount(<Loader type="sk-fading-circle" />);
    expect(wrapper.props().type).to.equal('sk-fading-circle');
    wrapper.setProps({ type: 'foo' });
    expect(wrapper.props().type).to.equal('foo');
  });

  it('should render some html', () => {
    let loaderHtml = renderToString(<Loader type="rotating-plane" />);
    console.log(loaderHtml);
    expect(loaderHtml).to.have.contain('class="spinner rotating-plane"');
  });
});

describe('Static Rendered Markup', () => {
  it('renders rect1 `div`', () => {
    const wrapper = render(<Loader type="rect" />);
    expect(wrapper.find('.rect1')).to.have.length(1);
  });
});
