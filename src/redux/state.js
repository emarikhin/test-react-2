let state = {
    ProfilePage: {
        PostsMessages: [
            { message: 'First message!', likeCount: 21 },
            { message: 'Second message', likeCount: 25 },
            { message: 'Third message', likeCount: 47 },
            { message: 'Forth message', likeCount: 146 }
        ]
    },
    DialogsPage: {
        d: [
            { id: 1, name: 'Eugene', ava: 'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300' },
            { id: 2, name: 'Irison', ava: 'https://avatarfiles.alphacoders.com/120/thumb-120208.jpg' },
            { id: 3, name: 'Ronny', ava: 'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Ghost-512.png' }
        ],
        m: [
            { id: 1, name: 'Eugene', message: 'Choice!', ava: 'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300', myava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg' },
            { id: 2, name: 'Eugene', message: 'Hey bro', ava: 'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300', myava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg' },
            // { id: 3, name: 'Irison', message: 'Chur mate', ava: 'https://avatarfiles.alphacoders.com/120/thumb-120208.jpg', myava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg'},
            // { id: 4, name: 'Ronny', message: 'Sweetaz', ava: 'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Ghost-512.png', myava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg'},
            // { id: 5, name: 'Ronny', message: 'No sweat!', ava: 'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Ghost-512.png', myava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg'},
            // { id: 6, name: 'Ronny', message: 'Seeya', ava: 'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Ghost-512.png', myava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg'}
        ],
        me: [
            { id: 1, name: 'Zarf', message: 'Choice!', ava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg' },
            { id: 2, name: 'Zarf', message: 'Hey bro', ava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg' },
            { id: 3, name: 'Zarf', message: 'Chur mate', ava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg' },
            { id: 4, name: 'Zarf', message: 'Sweetaz', ava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg' },
            { id: 5, name: 'Zarf', message: 'No sweat!', ava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg' },
            { id: 6, name: 'Zarf', message: 'Seeya', ava: 'https://partisandawn.files.wordpress.com/2011/11/fred-flintstone.jpg' }
        ]
    },
    SiteBar: {
        f: [
            { id: 1, name: 'Eugene', ava: 'https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_09279e8e.jpeg?region=0,0,300,300' },
            { id: 2, name: 'Irison', ava: 'https://avatarfiles.alphacoders.com/120/thumb-120208.jpg' },
            { id: 3, name: 'Ronny', ava: 'https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Ghost-512.png' }
        ]
    }
}

// let AvaLink = props.dialogsState.d.map(ava => {
//     return "<img src=" + ava + "></img>"
// })

export default state;
