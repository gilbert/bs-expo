// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Block           = require("bs-platform/lib/js/block.js");
var Curry           = require("bs-platform/lib/js/curry.js");
var Printf          = require("bs-platform/lib/js/printf.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

function promise_to_result(errorMessage, f) {
  return f.then((function (good) {
                  return Promise.resolve(/* Ok */Block.__(0, [good]));
                })).catch((function (bad) {
                var tmp;
                if (errorMessage) {
                  tmp = /* Error */Block.__(1, [errorMessage[0]]);
                } else {
                  var match = JSON.stringify(bad);
                  tmp = /* Error */Block.__(1, [match !== undefined ? /* Error */Block.__(1, [match]) : /* Error */Block.__(1, ["Unknown Issue"])]);
                }
                return Promise.resolve(tmp);
              }));
}

function errorToString($staropt$star, error) {
  var errorMessage = $staropt$star ? $staropt$star[0] : "Promise rejected";
  var match = JSON.stringify(error);
  if (match !== undefined) {
    return Curry._2(Printf.sprintf(/* Format */[
                    /* String_literal */Block.__(11, [
                        "Reason:",
                        /* String */Block.__(2, [
                            /* No_padding */0,
                            /* String_literal */Block.__(11, [
                                ": Dump:",
                                /* String */Block.__(2, [
                                    /* No_padding */0,
                                    /* End_of_format */0
                                  ])
                              ])
                          ])
                      ]),
                    "Reason:%s: Dump:%s"
                  ]), errorMessage, match);
  } else {
    return Curry._1(Printf.sprintf(/* Format */[
                    /* String */Block.__(2, [
                        /* No_padding */0,
                        /* String_literal */Block.__(11, [
                            " (Could not stringify promise rejection object)",
                            /* End_of_format */0
                          ])
                      ]),
                    "%s (Could not stringify promise rejection object)"
                  ]), errorMessage);
  }
}

var MissingFieldShouldExist = Caml_exceptions.create("Helpers-BsExpo.MissingFieldShouldExist");

exports.promise_to_result       = promise_to_result;
exports.errorToString           = errorToString;
exports.MissingFieldShouldExist = MissingFieldShouldExist;
/* No side effect */