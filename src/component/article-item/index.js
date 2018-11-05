import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Article from './article'
import './style.less';

class ArticleItem extends PureComponent {
    static propstypes = {
        allArticles: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string.isRequired,
                image: PropTypes.string,
                likeCounts: PropTypes.number,
                commentCounts: PropTypes.number,
            })
        ).isRequired,
        onClick: PropTypes.func,
    }
    static defaultProps = {
        allArticles: [{
            id: 1,
            type: 'column',
            topinfo: { author: 'WangZhen', time: '1小时前', classify: '前端\\JavaScript' },
            title: '基于hapi的Node.js的程序后端开发',
            likeCounts: 9,
            commentCounts: 2,
        },
        { id: 2, type: 'volumes', topinfo: { author: 'Duanbowen', time: '5分钟前', classify: '前端' }, title: '移动端页面分享快照生成总结'}]
    }
    handleContentScroll = e => {
        const { scrollTop, clientHeight, scrollHeight } = e.target
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
        const allArticles = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
        const article = { id: 2, type: 'volumes', topinfo: { author: 'Duanbowen', time: '5分钟前', classify: '前端' }, title: '移动端页面分享快照生成总结'}
        return (
            <div className="container">
                <div 
                    className="article-item-list"
                    ref={ref => (this.list = ref)}
                    onScroll={this.handleContentScroll}
                >
                    {allArticles.map((a, index) => <Article key={index} article={article}/>)}
                </div>
                <button className="to-top-btn" onClick={this.handleToTopClick}>
                    <i className="ion-android-arrow-dropup"/>
                </button>
            </div>
        )
    }
}

export default ArticleItem
