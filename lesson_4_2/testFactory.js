'use strict';

describe("Test Algorithm Kit", function() {

    for (var i = 0; i < tasks.length; i++) {
        runTestsForTask(tasks[i], i);
    }

    function runTestsForTask(task, i) {
        describe(i + '. ' + task.title, function() {
            var tests = task.tests;
            for (var j = 0; j < tests.length; j++) {
                runSingleTest(tests[j], task);
            }
        });
    }

    function runSingleTest(test, task) {
        //TODO wrap with try/catch
        it("parameters: " + test.parameters, function() {
            var result = task.solution.apply(null, test.parameters);
            var expected = test.expectedResult;
            if(typeof expected == 'number' && isNaN(expected)) {
                assert.isTrue(isNaN(result))
            } else {
                assert.deepEqual(expected, result);
            }
        });
    }
});

mocha.run();