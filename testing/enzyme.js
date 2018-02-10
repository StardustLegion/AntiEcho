// tests in progress
const expect = require('chai').expect;
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-15.4');
const { shallow, mount } = Enzyme;
const React = require('react');
const NewsFeedItem = require('../client/src/components/NewsFeedItem');
const Header = require('../client/src/components/Header');
const PoliticalSlider = require('../client/src/components/PoliticalSlider');
const Search = require('../client/src/components/Search');


Enzyme.configure({ adapter: new Adapter() });

describe('React unit tests', () => {

  // NewsFeedItem component tests
  describe('<NewsFeedItem />', () => {
    let wrapper;
    let url = 'http://www.foxnews.com/us/2017/12/05/gif-jump-roping-pylons-stumps-internet.html';

    before(() => {
      wrapper = shallow(<NewsFeedItem
        key={0}
        id={0}
        author={'Jane McTest'}
        source={'Fox News'}
        title={'GIF of jump-roping pylons stumps the internet'}
        description={'The latest internet fad comes via a GIF of pylons that has people scratching their heads.'}
        url={url}
        urlToImage={'http://a57.foxnews.com/images.foxnews.com/content/fox-news/us/2017/12/05/gif-jump-roping-pylons-stumps-internet/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1512529303337.jpg?ve=1&tl=1'}
        publishedAt={'2017-12-08T17:02:00Z'}
      />);
    });

    it('Renders a news feed item <div> with id "card"', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.props().id).to.equal('card');
    });

    it('Renders a news feed item with a child "a" element with href', () => {
      expect(wrapper.props().children.type).to.equal('a');
      expect(wrapper.props().children.props.href).to.equal(url);
    });
  });
  
  // Search component tests
  describe('<Search />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(<Search
        steering={'testing search text'}
        onSubmit={() => {}}
        handleSearch={() => {}}
        handleKeyPress={() => {}}
      />);
    });

    it('Renders a search <div> with id search-field', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.props().id).to.equal('search-field');
    });

    it('Renders a TextField as child of search field with a default search message', () => {
      expect(wrapper.props().children[0].props.hintText).to.equal('Search here for news');
    });
  });
  
  // PoliticalSlider component tests
  describe('<PoliticalSlider />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(<PoliticalSlider
        sliderValue={1}
        sliderChange={() => {}}
        filterArticles={() => {}}
      />);
    });

    it('Renders a PoliticalSlider <div> with id slider', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.props().id).to.equal('slider');
    });

    it('Renders a Slider as child of PoliticalSlider with a default value of 0', () => {
      expect(wrapper.props().children[0].props.defaultValue).to.equal(0);
    });
  });

  // Header component tests
  describe('<Header />', () => {
    let wrapper;

    before(() => {
      wrapper = shallow(<Header
        steering={'testing search text'}
        onSubmit={() => {}}
        handleSearch={() => {}}
        handleKeyPress={() => {}}
      />);
    });

    it('Renders a Header <div> with no id', () => {
      expect(wrapper.type()).to.equal('div');
      expect(wrapper.props().id).to.equal(undefined);
    });

    it('Renders a Search as child of Header with a default value', () => {
      expect(wrapper.props().children.props.steering).to.equal('testing search text');
    });
  });
});
