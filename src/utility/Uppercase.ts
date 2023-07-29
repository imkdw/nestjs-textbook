/**
 * UpperCase<StringType>
 * 문자열을 모두 대문자로 치환
 */
const greeting = "greeting";
type GreetingUppercase<str extends string> = `ID-${Uppercase<str>}`;
type MainID = GreetingUppercase<"hello">;
