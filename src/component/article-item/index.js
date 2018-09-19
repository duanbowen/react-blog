import React, { PureComponent } from 'react';
import articleImg from '/Users/zheng/workplace/react-custom-demo/src/assets/articleImg.jpg';
import PropTypes from 'prop-types'
import style from './style.less';

class ArticleItem extends PureComponent {
    static propstypes = {
        articleInfos: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                image: PropTypes.string
            })
        ).isRequired
    }
    static defaultProps = {
        articleInfos: [{type: 'column', topinfo: {author: 'WangZhen', time: '1小时前', classify: '前端\\JavaScript'}, title: '基于hapi的Node.js的程序后端开发', image: articleImg}, 
                        {type: 'volumes', topinfo: {author: 'Duanbowen', time: '5分钟前', classify: '前端'}, title: '移动端页面分享快照生成总结', image: articleImg}]
    }
    render(){
        const { articleInfos } = this.props
        const renderMetaList = (metas) => {
            let metasList = []
            for(let m in metas){
                metasList.push(<li>{metas[m]} . </li>)
            }
            return metasList
        }
        return(
            <div className={style['container']}>
                {articleInfos.map( (article, index) => (
                    <div key={index} className={style['article-item']}>
                        <div className={style['infobox']}>
                        <div className={style['metaList']}>
                            <ul>
                            <span className={style['column']}>专栏-</span>
                                {renderMetaList(article.topinfo)}
                            </ul>
                        </div>
                        <div className={style['title']}><a>{article.title}</a></div>
                         <div className={style['actions']}>
                            <button onClick={}>点赞</button>
                            <button onClick={}>评论</button>
                        </div>
                        </div>
                        <img src={article.image} className={style['article-img']}></img>
                    </div>
                ))}
            </div>
        )
    }
}

export default ArticleItem
