import React, { PureComponent } from 'react';
import articleImg from '/Users/zheng/workplace/react-custom-demo/src/assets/articleImg.jpg';
import PropTypes from 'prop-types'
import {likeIcon, likeIconClick, commentIcon} from '../../lib/const.js' 
import  './style.less';

class ArticleItem extends PureComponent {
    static propstypes = {
        articleInfos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string.isRequired,
                image: PropTypes.string,
                likeCounts: PropTypes.number,
                commentCounts: PropTypes.number,
            })
        ).isRequired
    }
    static defaultProps = {
        articleInfos: [{
                id: 1,
                type: 'column', 
                topinfo: {author: 'WangZhen', time: '1小时前', classify: '前端\\JavaScript'},
                title: '基于hapi的Node.js的程序后端开发', 
                image: articleImg,
                likeCounts: 9,
                commentCounts: 2}, 
                        {id: 2, type: 'volumes', topinfo: {author: 'Duanbowen', time: '5分钟前', classify: '前端'}, title: '移动端页面分享快照生成总结', image: articleImg}]
    }
    state = {
        clicked: false,
        likeActive: false,
        commentsActive: false
    }
    handleArticleClick = () => {
        this.setState({
            clicked: true
        })
    }
    onLikeClick = () => {
        // return function test() {
        //     console.log(index)
        // };
        const oldLikeActive = this.state.likeActive
        this.setState({
            likeActive: oldLikeActive ? false : true
        })
    }
    render(){
        const { articleInfos } = this.props
        const { clicked, likeActive, commentsActive } = this.state
        const renderMetaList = (metas) => {
            let metasList = []
            let id=0
            for(let m in metas){
                metasList.push(<li key={id++}>{metas[m]} . </li>)
            }
            return metasList
        }
        return(
            <div className="container">
                {articleInfos.map( (article, index) => (
                    <div key={article.id} className="article-item">
                        <div className="infobox">
                        <div className="metaList">
                            <ul>
                            <span className="column">专栏-</span>
                                {renderMetaList(article.topinfo)}
                            </ul>
                        </div>
                        <div className={clicked ? 'articleitem-title clicked' : 'articleitem-title'}
                            onClick={this.handleArticleClick}>
                            <a>{article.title}</a>
                        </div>
                         <div className="articleitem-buttons">
                            <div className="articleitem-button1" onClick={this.onLikeClick}>
                                {likeActive ? (<img src={likeIconClick}/>) : (<img src={likeIcon}/>)}
                                <span className={likeActive ? 'articleitem-buttons-count active': 'articleitem-buttons-count'}>{article.likeCounts}</span>
                            </div>
                            <div className="articleitem-button2" onClick={this.onCommentClick}>
                                <img src={commentIcon}/><span className="articleitem-buttons-count">9</span>
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
