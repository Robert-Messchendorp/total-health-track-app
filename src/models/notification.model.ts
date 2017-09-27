export class Notification {
    constructor(public type: string, public title: string, public message: string, public severity: string, public record: object) {}
}