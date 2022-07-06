export interface InitialType {
    packages: { name: string; url: string; }[];
    loading: boolean;
    searchPackage: (name: string) => void;
    notFound: boolean;
};

export interface FormProps {
    onSubmit: (name: string) => void;
};