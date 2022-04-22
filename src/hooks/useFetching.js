import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')
    const waitFor = () => new Promise(resolve => setTimeout(resolve, 500));


    async function fetching(...args) {
        setTimeout(() => {})
        try {
            setIsLoading(true);
            await waitFor();
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];

}
