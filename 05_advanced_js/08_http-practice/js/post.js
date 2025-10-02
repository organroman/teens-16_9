class Post{
    constructor(id, title, body){
        this.id = id;
        this.title = title;
        this.body = body;
    }
    delete (){
        const toDelete = confirm("Ты точно хочешь удалить это сообщение?")
        if (toDelete){
            fetch (`https://ajax.test-danit.com/api/json/posts/${this.id}`)
        }
    }
}

export default Post;