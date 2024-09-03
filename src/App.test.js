// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/container/i);
//   expect(linkElement).toBeInTheDocument();
// }); 
 
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

test('check content in app.js', () => {
  const wrapper = shallow(<App />);
  const pText = wrapper.find('p').text();
  console.log('Paragraph text:', pText); // Log the paragraph text for debugging
  expect(pText).toContain('container');
});
