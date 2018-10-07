import React, { PureComponent } from 'react';
import articleImg from '../../assets/articleImg.jpg';
import PropTypes from 'prop-types'
import { likeIcon, likeIconClick, commentIcon } from '../../lib/const.js'
import './style.less';

class ArticleItem extends PureComponent {
    static propstypes = {
        articleInfos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                type: PropTypes.string,
                topinfo: PropTypes.object,
                title: PropTypes.string.isRequired,
                image: PropTypes.string,
                likeActive: PropTypes.bool,
                likeCounts: PropTypes.number,
                commentCounts: PropTypes.number,
            })
        ).isRequired
    }
    static defaultProps = {
        articleInfos: [
            {
                id: 1,
                type: 'articleitem-column',
                topinfo: { author: 'WangZhen', time: '1小时前', classify: '前端\\JavaScript' },
                title: '基于hapi的Node.js的程序后端开发',
                image: articleImg,
                likeActive: false,
                likeCounts: 9,
                commentCounts: 2
            }]
    }
    state = {
        clicked: false,
        likeActive: false
    }
    handleArticleClick = () => {
        this.setState({
            clicked: true
        })
    }
    onLikeClick = id => () => {
        const { articleInfos } = this.props
        const article = articleInfos.filter(a => a.id === id)
        console.log('current=article===', article)
        const oldLikeActive = this.state.likeActive
        this.setState({
            likeActive: oldLikeActive ? false : true
        })
    }
    onCommentClick = id => () => {
        const { articleInfos } = this.props
        const article = articleInfos.filter(a => a.id === id)
        console.log('current=article===', article)
    }
    render() {
        const { articleInfos } = this.props
        const { clicked, likeActive } = this.state
        const renderMetaList = (metas) => {
            let metasList = []
            let id = 0
            for (let m in metas) {
                metasList.push(<li key={id++}>{metas[m]} . </li>)
            }
            return metasList
        }
        return (
            <div className="articleitem-container">
                {articleInfos.map(article => (
                    <div key={article.id} className="articleitem-items">
                        <div className="articleitem-infobox">
                            <div className="articleitem-metaList">
                                <ul>
                                    <span className="articleitem-column">专栏</span>
                                    {renderMetaList(article.topinfo)}
                                </ul>
                            </div>
                            <div className={clicked ? 'articleitem-title clicked' : 'articleitem-title'}
                                onClick={this.handleArticleClick}>
                                <a>{article.title}</a>
                            </div>
                            <div className="articleitem-buttons">
                                <div className="articleitem-button1" onClick={this.onLikeClick(article.id)}>
                                    {likeActive ? (<img src={likeIconClick} />) : (<img src={likeIcon} />)}
                                    <span className={likeActive ? 'articleitem-buttons-count active' : 'articleitem-buttons-count'}>{article.likeCounts}</span>
                                </div>
                                <div className="articleitem-button2" onClick={this.onCommentClick(article.id)}>
                                    <img src={commentIcon} />
                                    <span className="articleitem-buttons-count">{article.commentCounts}</span>
                                </div>
                            </div>
                        </div>
                        <img src={article.image} className="article-img"></img>
                    </div>
                ))}
            </div>
        )
    }
}

export default ArticleItem
