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
        toast.error('This Book is already added')
    }
    else {
        toast.success('Congrate! You Book is added')
        storedBooks.push(id);
        const storedBooksStr = JSON.stringify(storedBooks);
        localStorage.setItem('read-list', storedBooksStr);
    }
}

export {getStoredBooks, addToLocalStorage}