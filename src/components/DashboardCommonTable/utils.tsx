import { TablesRow, TableText } from "./style"


export const renderEmptyTable = (title: string) => {
    return (
        <>
            <TablesRow bgcolor={"white"}>
                <TableText data-testid={`${title}-empty`}></TableText>
                <TableText data-testid={`${title}-win-count-empty`}></TableText>
            </TablesRow>
            <TablesRow bgcolor={"whitesmoke"}>
                <TableText></TableText>
                <TableText></TableText>
            </TablesRow>
            <TablesRow bgcolor={"white"}>
                <TableText></TableText>
                <TableText></TableText>
            </TablesRow>
        </>
    )
}