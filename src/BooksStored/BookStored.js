import toast from "react-hot-toast";

const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('read-list');
    if (storedBooks) {
       const storedBooksList = JSON.parse(storedBooks);
       return storedBooksList;
    }
    else {
        return [];
    }
}


const addToLocalStorage = id => {
    const storedBooks = getStoredBooks();
    if (storedBooks.includes(id)) {
        toast.error('This Book is already added to the read list')
    }
    else {
        toast.success('Congrate! Your Book is added to the read list')
        storedBooks.push(id);
        const storedBooksStr = JSON.stringify(storedBooks);
        localStorage.setItem('read-list', storedBooksStr);
    }
}


const getStoredWishlistBooks = () => {
    const storedWishlistBooks = localStorage.getItem('wish-list');
    if(storedWishlistBooks){
        const storedWishlist = JSON.parse(storedWishlistBooks);
        return storedWishlist;
    }
    else{
        return [];
    }
}


const wishlistAddToLS = id => {
    const storedWishlistBooks = getStoredWishlistBooks();
    if(storedWishlistBooks.includes(id)){
        toast.error('This Book is already added to the Wish list')
    }
    else{
        toast.success('Congrate! Your Books is added to the Wish list')
        storedWishlistBooks.push(id);
        const wishlistStr = JSON.stringify(storedWishlistBooks);
        localStorage.setItem('wish-list', wishlistStr)
    }
}

export {getStoredBooks, addToLocalStorage , wishlistAddToLS, getStoredWishlistBooks }