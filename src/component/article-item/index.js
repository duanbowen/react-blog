import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Article from './article'
import './style.less';

class ArticleItem extends PureComponent {
    static propstypes = {
        onClick: PropTypes.func,
    }
    state = {
        currentArticles: []
    }
    componentDidMount(){
        fetch('http://rap2api.taobao.org/app/mock/117002/papers').then(function(response) {
            return response.json()
          }).then(artices => {
               this.setState({
                currentArticles: artices.data
               })
          })
    }
    handleContentScroll = e => {
        const { scrollTop, clientHeight, scrollHeight } = e.target
        console.log('scrollTop------', scrollTop)
        console.log('clientHeight------', clientHeight)
        console.log('scrollHeight------', scrollHeight)
        const { allArticles } = this.props
        if (
            scrollHeight - (scrollTop + clientHeight) <= 200 &&
            !allArticles.last
        ) {
            this.reftchNextPageData()
        }
    }
    // ToDo
    reftchNextPageData = () => {}
    handleToTopClick = () => {
        this.list.scrollTop = 0
    }
    render() {
        const { currentArticles } = this.state
        return (
            <div className="container">
                <div 
                    className="article-item-list"
                    ref={ref => (this.list = ref)}
                    onScroll={this.handleContentScroll}
                >
                    {currentArticles.map((article, index) => <Article key={index} article={article}/>)}
                </div>
                <button className="to-top-btn" onClick={this.handleToTopClick}>
                    <i className="ion-android-arrow-dropup"/>
                </button>
            </div>
        )
    }
}

export default ArticleItem
