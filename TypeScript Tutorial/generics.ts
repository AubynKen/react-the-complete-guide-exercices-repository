const insertAtBeginning = <T>(arr: T[], element: T): T[] => {
    return [element, ...arr];
}