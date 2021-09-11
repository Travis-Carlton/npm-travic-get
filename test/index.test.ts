// TODO -> add actual tests

import { get } from "../src/index";

const nestedObj = {
	aa: "another string"
};

const obj = {
	a: "string",
	b: true,
	c: nestedObj,
	d: [1, 2, 3]
};

test('getting the value of "a" in obj should be "string"', () => {
	expect(get(obj, "a")).toEqual("string");
});

test('getting the value of "b" in obj should be "true"', () => {
	expect(get(obj, "b")).toBeTruthy();
});

test('getting the value of "c" in obj should be nestedObj ( { aa: "aa" } )', () => {
	expect(get(obj, "c")).toEqual(nestedObj);
});

test('getting the value of "c.aa" in obj should be "another string"', () => {
	expect(get(obj, "c.aa")).toEqual("another string");
});

test('getting the value of "c.aa.aaa" in obj should be null', () => {
	expect(get(obj, "c.aa.aaa")).toBeNull();
});

test('getting the value of "c.aa.aaa" in obj with a default value should be the default value', () => {
	expect(get(obj, "c.aa.aaa", "It's not here!")).toEqual("It's not here!");
});

test('getting the value of "d.1" in obj should be 2', () => {
	expect(get(obj, "d.1")).toEqual(2);
});

test('getting the value of "e.a" in obj should be specified default value and the error should be logged', () => {
	expect(get(obj, "e.a", -1, false)).toEqual(-1);
});
