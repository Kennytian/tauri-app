import {useCallback} from "react";
import {invoke} from "@tauri-apps/api";
import useSWR from "swr";

export const invokeFetcher = async <TArgs extends Record<string, any>, TResult>(
    command: string, id: number, args: TArgs
): Promise<TResult> => invoke<TResult>(command, {id, ...args})

export const useInvoke = <TResult>(id: number, getCommand: string, setCommand: string) => {
    // run the invoke command to get by ID
    const {data, error, mutate} = useSWR<TResult>([getCommand, id, null], invokeFetcher);

    // create an update function
    const update = useCallback(async (newDate: TResult) => {
        mutate(await invoke(setCommand, {id, ...newDate}), false);
    }, [mutate, id, setCommand]);

    return {data, fetching: !data, error, update};
}
