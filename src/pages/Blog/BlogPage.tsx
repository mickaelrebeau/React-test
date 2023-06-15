import { Card } from "react-bootstrap";

export default function BlogPage(props: any) {
    const { articles } = props

    const dateFormatter = (el: any) => {
        const date = new Date(el)
        return `Créé le ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} à ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    } 

    return (
        <>
            <h1> Blog Page </h1>
            {
                new Date().toUTCString()
            }
            <main className="mt-5">
                <h2 className="text-center">Tous les articles</h2>
                <Card className="my-4">
                    <div className="d-flex p-3">
                        <Card.Img className="mike" src="../public/images/mike.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle>Test 42</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
                {articles.sort((a: any,b: any) => new Date(b.date) - new Date(a.date))
                .map((article: any, index: any) => (
                <Card className="my-4" key={ index }>
                    <div className="d-flex p-3">
                        <Card.Img className="mike" src="../public/images/mike.png" />
                        <Card.Body>
                            <Card.Title>{article.name}</Card.Title>
                            <Card.Subtitle>{article.title}</Card.Subtitle>
                            <Card.Text>
                                {article.message}  
                            </Card.Text>
                            <Card.Text>
                                {dateFormatter(article.date)} 
                            </Card.Text>
                        </Card.Body>
                    </div>
                </Card>
                ))}
            </main>
        </>
    )
}