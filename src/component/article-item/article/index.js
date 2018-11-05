import React, { PureComponent } from 'react';
import articleImg from '../../../assets/articleImg.jpg';
import PropTypes from 'prop-types'
import { likeIcon, likeIconClick, commentIcon } from '../../../lib/const'
import './style.less';

export default class Article extends PureComponent {
    static propstypes = {
        Article: PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string.isRequired,
                image: PropTypes.string,
                likeCounts: PropTypes.number,
                commentCounts: PropTypes.number,
            }).isRequired,
    }
    state = {
        likeArticles: []
    }
    handleArticleClick = item => () => {
        const { onClick } = this.props
        onClick && onClick(item)
    }
    onLikeClick = id => () => {
        let likeArticles = this.state.likeArticles
        if(likeArticles.includes(id)){
            likeArticles = likeArticles.filter(l => l !== id)
        }else {
            likeArticles.push(id)
        }
        const  s = new Set(likeArticles)
        this.setState({
            likeArticles: [...s]
        })
    }
    onCommentClick = id => () => {
    }
    render() {
        const { likeArticles } = this.state      
        const { article } = this.props      
        const renderMetaList = (metas) => {
            let metasList = []
            let id = 0
            for (let m in metas) {
                metasList.push(<li key={id++}>{metas[m]}</li>)
            }
            return metasList
        }
    return (
        <div className="article-item" >
            <div className="infobox">

                <div className="metaList">
                    <ul>
                        <span className="column">专栏</span>
                        {renderMetaList(article.topinfo)}
                    </ul>
                </div>

                <div className="title"><a href="#">{article.title}</a></div>

                <div className="articleitem-buttons">
                <div className="articleitem-button1" onClick={this.onLikeClick(article.id)}>
                    {likeArticles.includes(article.id) ? (<img src={likeIconClick} />) : (<img src={likeIcon} />)}
                    <span className={likeArticles.includes(article.id) ? 'articleitem-buttons-count active' : 'articleitem-buttons-count'}>{article.likeCounts}</span>
                </div>
                <div className="articleitem-button2" onClick={this.onCommentClick}>
                    <img src={commentIcon} /><span className="articleitem-buttons-count">9</span>
                </div>
                </div>
            </div>

            <img src={articleImg} className="article-img"></img>
        </div>)
    }
}

