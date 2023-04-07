export interface IField {
    type: "input" | "textarea";
    value: string;
    setValue: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field?: string) => void;
    label: string;
    placeholder: string;
    onChangeParam?: string
}

export interface IButton {
    text: string;
    type?: string;
    textTransform?: "uppercase" | "capitalize" | "lowercase";
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
    loading?: boolean
}

export interface INewAndEditPost {
    title: string;
    content: string;
    setValue: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field?: string) => void;
    type?: "new" | "edit";
    isEditing?: boolean;
    isCreating?: boolean;
    createPost?: (e: React.MouseEvent<HTMLElement>) => void;
    editPost?: (e: React.MouseEvent<HTMLElement>) => void;
    closeModal?: (e: React.MouseEvent<HTMLElement>) => void;
    id?: number;
    editedContent?: IPostBody;
    setEditedContent?: React.Dispatch<React.SetStateAction<IPostBody>>;
}

export interface IPost {
    title: string;
    content: string;
    created_datetime: string;
    id: number;
    username: string;
    openModal: (type: string, id: number, title?: string, content?: string) => void;
    setEditedContent?: React.Dispatch<React.SetStateAction<IPostBody>>;
}

export interface IModal {
    children?: React.ReactNode;
    domRef: React.MutableRefObject<any>;
}

export interface IPostBody {
    title: string;
    content: string;
    username?: string;
}

export interface IDeleteModalContent {
    loading: boolean;
    deleteItem: () => void;
    closeModal: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface IPaginationWidget {
    handlePageChange: (type: "next" | "prev") => void;
    pageNo: number;
    isPrevAvailable: boolean;
    isNextAvailable: boolean;
}