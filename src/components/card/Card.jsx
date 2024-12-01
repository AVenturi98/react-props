import style from './Card.module.css'
import image from '../../assets/31343C.svg'

function Card({ title, content, tags, published }) {

    return (
        <>
            {published &&
                <main className="container">
                    <div className={style.card}>
                        <div className={style.cardImg}>
                            <img className={style.image} src={image} alt="" />
                        </div>
                        <div className={style.cardBody}>
                            <div className={style.titleCard}>{title}</div>
                            <div className={style.descriptionCard}>{content}</div>
                            <div>{tags}</div>
                            <button className={style.btn}>BUTTON</button>
                        </div>
                    </div>
                </main>}
        </>
    )
}



export default Card
