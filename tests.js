/**
 * Created by sridharrajs on .
 */

'use strict';

let should = require('should');

let wrapper = require('./index');

let records = [{
    id: 1,
    public_url: 'www.example.com/1',
    name: 'bill',
    email: 'bill@abc.com',
    created_at: 1453948650,
    updated_at: 1453948950,
    isActive: true,
    password: '$2a$04$kafYF6XJgrYMUp5BfbDkNO5cervPIhwl4MKbabxWLpcAPwOs7HdR.'
}, {
    id: 2,
    public_url: 'www.example.com/2',
    name: 'john',
    email: 'john@abc.com',
    created_at: 1453948789,
    updated_at: 1453948827,
    isActive: false,
    password: '$2a$04$liPFStnkJLFut5LuX0/feOUIxJlpHSLpVGHoCdRmeNwFFKzMqwnf6'
}];

let expectedRecords = [{
    id: 1,
    public_url: 'www.example.com/1',
    name: 'bill',
    email: 'bill@abc.com'
}, {
    id: 2,
    public_url: 'www.example.com/2',
    name: 'john',
    email: 'john@abc.com'
}];

const PUBLIC_ATTRIBUTES = [
    'id',
    'public_url',
    'name',
    'email'
];

describe('index.js', ()=> {
    describe('filterByAttributes()', ()=> {
        it("If attributes aren't specified, it should return unfiltered records", (done)=> {
            let filteredRecords = wrapper.filterByAttributes(records);
            should(filteredRecords).equal(records);
            done();
        });
        it('If attributes are specified, it should return filtered records', (done)=> {
            let filteredRecords = wrapper.filterByAttributes(records, PUBLIC_ATTRIBUTES);
            should(filteredRecords).be.eql(expectedRecords);
            done();
        });
        it('If attributes are empty, it should return unfiltered records', (done)=> {
            let filteredRecords = wrapper.filterByAttributes(records, []);
            should(filteredRecords).be.eql(records);
            done();
        });
    });
});



