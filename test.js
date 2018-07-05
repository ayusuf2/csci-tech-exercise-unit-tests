var chai = require('chai')
var expect = chai.expect
var should = chai.should()

const index = require('../index')
const Student = index.Student

describe('Students', function() {
  const student1 = Student('Ahmed Yusuf', 'University of Nebraska at Omaha')

  it('Students should have a name', function() {
    student1.name.should.equal('Ahmed Yusuf')
  })

  it('Students should have a school', function() {
    student1.school.should.equal('University of Nebraska at Omaha')
  })

  it('Students should have a message', function() {
    student1.message.should.equal(`My name is ${student1.name} and I am enrolled at ${student1.school}!`)
  })
})