package br.com.fabricadeprogramador.ws.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.fabricadeprogramador.ws.model.Cliente;
import br.com.fabricadeprogramador.ws.repository.ClienteRepository;


@Service
public class ClienteService {
	@Autowired
	ClienteRepository clienteRepository;
	
	
	public Cliente cadastrar(Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	public Collection<Cliente> buscarTodos(){
		return clienteRepository.findAll();
	}
	
	public void excluir(Cliente clienteEncontrado) {
		clienteRepository.delete(clienteEncontrado);
	} 
	
	public void excluirPorId(Integer id) {
		clienteRepository.deleteById(id);
	}
		
	public Cliente buscaPorId(Integer id) {
		return clienteRepository.findById(id).get();
	}
	
	public Cliente alterar(Cliente cliente) {
		return clienteRepository.save(cliente);
	}

}
