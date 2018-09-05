#include "mylibrary.h"
int main()
{
    myobj *fun_object;
    double res, fun;

    res = do_some_number_fudging(1.5, 5);
    fun_object = create_object();

    if (fun_object == NULL) {
      printf("Oh no! Couldn't create object!\n");
      exit(2);
    }

    use_string_with_object(fun_object, "Hello World!");
    fun = do_stuff_with_object(fun_object);
    delete_object(fun_object);
}
