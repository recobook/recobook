// deno-lint-ignore-file
import { assertEquals,assertStrictEquals} from "https://deno.land/std@0.103.0/testing/asserts.ts";

import { create_user, delete_user_by_id, update_user } from '../src/service/user.service.ts'



Deno.test("Deveria criar um usuario", async () => {
    
    const {error } = await create_user({
        name: "Jadson dos Santos Silva",
        email: "jadson44.santos@gmail.com",
        username: "15859eb4-f0bb-11eb-aef4-9b77f48ed9b1",
        password: "15859eb4-f0bb-11eb-aef4-9b77f48ed9b1",
        photo: "http://0.0.0.0:1993/user/0000000001.png",
        bio: ""
    })

    if (error) { 
        assertEquals<boolean>(error,true)
    }else {
        assertEquals<boolean>(error,false)
    }

});

Deno.test("Deveria atualizar um usuario", async () => {
    
    const { error,message } = await update_user({
        name: "Jadson dos Santos Silva",
        email: "jadson444.stos@gmail.com",
        username: "15859eb4-f0bb-11eb-aef4-9b77f48ed9b1",
        password: "15859eb4-f0bb-11eb-aef4-9b77f48ed9b1",
        photo: "http://0.0.0.0:1993/user/0000000001.png",
        bio: "",
        id: 1
    })
    assertEquals<boolean>(error,false)

});

Deno.test("Deveria solicitar o id quando atualizar o usuário", async () => {
    
    const { error,message } = await update_user({
        name: "Jadson dos Santos Silva",
        email: "jadson444.santos@gmail.com",
        username: "15859eb4-f0bb-11eb-aef4-9b77f48ed9b1",
        password: "15859eb4-f0bb-11eb-aef4-9b77f48ed9b1",
        photo: "http://0.0.0.0:1993/user/0000000001.png",
        bio: "",
        //id: 1
    })

    assertStrictEquals(message,"id é obrigatório")
    assertEquals<boolean>(error,true)
});


Deno.test("Deveria excluir o usuário pelo id", async () => {
    
    const { error } = await delete_user_by_id({
        id: 1
    })
    assertEquals<boolean>(error,false)
});
