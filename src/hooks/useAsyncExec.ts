/**
 *
 * Hook to asynchronously execute a callback function after some delay
 * @param cb - callback to execute asynchronously, useful in case of updating state
 * @param delay (default: `0`) - specifies time (in ms) after which `cb` must be executed
 * @returns `id` - id corresponding to the timer created by setTimeout call, can be used to clear the timeout
 *
 */
const useAsyncExec = (cb: () => void, delay?: number) => {
    const id = setTimeout(cb, delay);

    return id;
};

export default useAsyncExec;

useAsyncExec.defaultProps = { delay: 0 };
